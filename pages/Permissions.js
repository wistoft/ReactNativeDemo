import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import Permissions from 'react-native-permissions'

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class Page extends React.Component {

	state = {
		hasCameraPermission: "Unknown",
		hasRecordingPermission: "Unknown",
		hasNotificationPermission: "No API support (android)",

	}

	async componentWillMount() {

		Permissions.check('camera').then(status => {
			this.setState({ hasCameraPermission: status })
		})

		Permissions.check('microphone').then(status => {
			this.setState({ hasRecordingPermission: status })
		})

		Permissions.check('notification').then(status => {
			this.setState({ hasNotificationPermission: status })
		})

	}

	requestPermissions = () => {
		
		Permissions.request('camera').then(status => {
			this.setState({ hasCameraPermission: status })
		})
		
		Permissions.request('microphone').then(status => {
			this.setState({ hasRecordingPermission: status })
		})
		
		Permissions.request('notification').then(status => {
			this.setState({ hasNotificationPermission: status })
		})

	}


	render() {
		return (

			<Screen
				title="Permissions"
				onMenuPress={this.props.navigation.toggleDrawer}
				style={{
					alignItems: 'flex-start',
				}}
			>

				<Text>Camera: {this.state.hasCameraPermission}</Text>
				<Text>Recording: {this.state.hasRecordingPermission}</Text>
				<Text>Notification: {this.state.hasNotificationPermission}</Text>

				<Button title="Request Permissions" onPress={this.requestPermissions.bind(this)} />


			</Screen>
		);
	}


}