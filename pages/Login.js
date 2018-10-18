import React from 'react';
import { View, Text, Linking, Platform, AsyncStorage, BackHandler } from 'react-native';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";


export default class LoginPage extends React.Component {

	state = {
		authorized: false,
		authorizedUnStored: false,
	}

	constructor() {
		super();
				
		AsyncStorage.getItem('authorized')
			.then(data => {
				if (data === "true"){
					this.setState({authorized:true});
				}else if (data === "false"){
					this.setState({authorized:false});
				} else {
					this.setState({authorized:false});
				}
			})
			;

	}

	onOpenMarket() {

		let url;

		if (Platform.OS === "android"){
			url  = "https://play.google.com/store/apps/details?id=com.facebook.katana";
		} else {
			url  = 'https://itunes.apple.com/us/app/facebook/id284882215';
		}

		Linking.openURL(url)
			.catch(err => console.error('An error occurred', err));
	}

	onLogin() {
		AsyncStorage.setItem('authorized',"true");
		this.setState({authorized:true, authorizedUnStored:true});
	}
	
	onLogout() {
		AsyncStorage.setItem('authorized',"false");
		this.setState({authorized:false, authorizedUnStored: false});
	}
	

	render() {

		//content
		
			const authorizedContent = this.state.authorized ?
				(

					<View style={{  alignItems: "flex-start" }} >

						<Text>You are Logged in.</Text>
	
						<Button title="Logout" onPress={() => this.onLogout()} />

						<Button title="Open Market" onPress={() => this.onOpenMarket()} />

					</View>

				):(

					<View>
		
						<Button title="Login" onPress={() => this.onLogin()} />

					</View>
				);


				
		//screen

			return (
				<Screen title="Login" onMenuPress={this.props.navigation.toggleDrawer} 
						style={{
							alignItems: 'flex-start',
						}}
					>

					{authorizedContent}

					<View style={{ flex: 1, width:"100%", justifyContent: "flex-end", alignItems: "flex-end" }} >
	
						<Text>{"stored state: " + this.state.authorized}</Text>
						<Text>{"unstored state: " + this.state.authorizedUnStored}</Text>

					</View>
	
				</Screen>
			);
	}
	

}