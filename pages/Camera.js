import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import ImagePicker from "react-native-image-picker";

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class Page extends React.Component {

	state = {
		urlToShow : null,
	}
	
	showImagePicker = () => {
		ImagePicker.showImagePicker({}, (response) => {
			this.setState({
				urlToShow: { uri: response.uri}
			});
		});
	}
	
	
	launchCamera = () => {
		ImagePicker.launchCamera({}, (response) => {
			this.setState({
				urlToShow: { uri: response.uri}
			});
		});
	}
	
	launchImageLibrary = () => {
		ImagePicker.launchImageLibrary({}, (response) => {
			this.setState({
				urlToShow: { uri: response.uri}
			});
		});
	}
	
	render() {
		return (
			<Screen
					title="Camera"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>
			
				<Button title="Image Picker" onPress={this.showImagePicker} />
				
				<Button title="Camera" onPress={this.launchCamera} />

				<Button title="Image Library" onPress={this.launchImageLibrary} />

 				<Image
					source={this.state.urlToShow}
					style={{width: "100%", height:"100%"}} 
				/>
				
			</Screen>		
		);
	}
	

}