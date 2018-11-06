import React from 'react';
import { Text, PushNotificationIOS} from 'react-native';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";


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
		this.addListeners();
		this.onRequestPermissions();
	}


	addListeners = () => {
		console.log("addListeners");

		PushNotificationIOS.addEventListener("register", (deviceToken) => {
			console.log("registered");
			console.log("DeviceToken: " + deviceToken);

			this.setState({
				regId:deviceToken,
				permissionMessage: "Able to push.",
			});
		});

		PushNotificationIOS.addEventListener("registrationError", (error) => {
			console.log("registrationError");
			console.log(error);
		});

		PushNotificationIOS.addEventListener("notification", (notification) => {

				console.log("Notification");
				console.log(notification);

				console.log(notification._alert);			//the message
				console.log(notification._badgeCount);
		
			// process the notification

				//this only, if the badge number is to be set, while the app is in the foreground.
				//if (notification._badgeCount)
				//	PushNotificationIOS.setApplicationIconBadgeNumber(parseInt(notification._badgeCount));

			// required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)

				notification.finish(PushNotificationIOS.FetchResult.NoData);

		});


	
	}


	onRequestPermissions = () => {
		console.log("requestPermissions");

		//no callback or promise ! The info will apear in the register event.
		PushNotificationIOS.requestPermissions();

	}
	
	onCheckPermissions = () => {
		PushNotificationIOS.checkPermissions(data => {
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
		PushNotificationIOS.setApplicationIconBadgeNumber(0);
	}
	
	
	setBadge = (number) => {
		console.log("badger");
		PushNotificationIOS.setApplicationIconBadgeNumber(number);
	}
	
	render() {
		return (
			<Screen
					title="PushNotificationIOS"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>

				<Text>{this.state.permissionMessage}</Text>
				<Text>Alert: {this.state.alertPermission}</Text>
				<Text>Badge: {this.state.badgePermission}</Text>
				<Text>Sound: {this.state.soundPermission}</Text>
			
				
				<Button title="Clear Badge" onPress={this.addListeners} />

				<Button title="Set Badge 2" onPress={() => this.setBadge(2)} />

				<Button title="Set Badge 3" onPress={() => this.setBadge(3)} />


				<Button title="Add Listeners" onPress={this.addListeners} />

				<Button title="Request Permission" onPress={this.onRequestPermissions} />

				<Button title="Check Permission" onPress={this.onCheckPermissions} />

				<Text>RegId: {this.state.regId}</Text>
				
			</Screen>		
		);
	}
	

}