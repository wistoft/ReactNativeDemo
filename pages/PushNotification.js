import React from 'react';
import { Text} from 'react-native';

import PushNotification from 'react-native-push-notification';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";


import SENDER_ID from "../FIREBASE_SECRETS";


export default class PushNotificationPage extends React.Component {

	state = {
		permissionMessage: "Permission unknown",
		alertPermission: "unknown",
		badgePermission: "unknown",
		soundPermission: "unknown",
		regId: "Unknown",
	}

	//maybe better in the app startup file.
	componentWillMount(){
		this.register();
	}

	register = () => {
		console.log("register");

		//register

			//apparently

			PushNotification.configure({
				senderID: SENDER_ID,			//only needed on android
			
				popInitialNotification: true,
			
				permissions: {	// IOS ONLY (optional): default: all - Permissions to register.
					alert: true,
					badge: true,
					sound: true
				},

				onRegister: (regId) => {

					console.log('regId:', regId.token);
					
					this.setState({
						regId:regId.token,
						permissionMessage: "Able to push.",
					});
					
				},
			
				onNotification: (notification) => {

						console.log("Notification");
						console.log(notification);

						const message = notification.body || notification.message || "NoMassage";


						console.log(message);
						console.log(notification.badge);	//the badge number
					
					// process the notification

						//update badge number - needed if app is active (is it then needed.s)
						if (notification.badge)
							PushNotification.setApplicationIconBadgeNumber(parseInt(notification.badge));
			
					// required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)

						//notification.finish(PushNotificationIOS.FetchResult.NoData);
				},
		
			});

	}


	onRequestPermissions = () => {
		//strange. The onRegister method is called, as a result of this.
		console.log("Requesting");
		PushNotification.requestPermissions();

	}
	
	onCheckPermissions = () => {
		PushNotification.checkPermissions(data => {
			console.log(data);
			this.onNewPermissions(data);
		});
	}
	
	onNewPermissions = (data) => {

		//create new state

			let newState = {};

			if ("alert" in data){
				newState["alertPermission"] = "" + data.alert;
			}

			if ("badge" in data){
				newState["badgePermission"] = "" + data.badge;
			}

			if ("sound" in data){
				newState["soundPermission"] = "" + data.sound;
			}

		//set new state

			this.setState(newState);

	}

	onClearBadge = () => {
		PushNotification.setApplicationIconBadgeNumber(0);
	}
	
	
	setBadge = (number) => {
		console.log("badger");
		PushNotification.setApplicationIconBadgeNumber(number);
	}
	
	render() {
		return (
			<Screen
					title="PushNotification"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>

				<Text>{this.state.permissionMessage}</Text>
				<Text>Alert: {this.state.alertPermission}</Text>
				<Text>Badge: {this.state.badgePermission}</Text>
				<Text>Sound: {this.state.soundPermission}</Text>
			

				<Button title="Clear Badge" onPress={this.onClearBadge} />

				<Button title="Set Badge 2" onPress={() => this.setBadge(2)} />

				<Button title="Set Badge 3" onPress={() => this.setBadge(3)} />


				<Button title="Register" onPress={this.register} />

				<Button title="Request Permission" onPress={this.onRequestPermissions} />

				<Button title="Check Permission" onPress={this.onCheckPermissions} />

				<Text>RegId: {this.state.regId}</Text>
				
			</Screen>		
		);
	}
	

}