import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

import Sound from 'react-native-sound';

export default class Page extends React.Component {

	state = {
	}

	constructor() {
		super();

		//conf

			this.audioFile = require("../assets/music.mp3");

		//prepare
			
			this.prepareSound();

	}

	prepareSound(){

		if (this.sound == null)
			this.sound = new Sound(this.audioFile, '', (error) => {
				if (error) {
					console.log('failed to load the sound', error);
				}
			});
	
	}

	//press play twice is needed, when playing again after stopped music.
	onPlay = () => {

		this.prepareSound();	//might already be done. Or might not. So ensure.

		console.log("playing");
		
		this.sound.play((success) => {
			
			if (success) {
				console.log('play() - success: ' + success);
			} else {
				console.log('play() - error: ' + success);
			}

		});
	}

	onPause = () => {
		console.log("pausing");
		this.sound.pause();
	}

	onStop = () => {

		console.log("stoping");

		this.sound.stop((success) => {

			this.sound.release();
			this.sound = null;

			console.log("stopped");
		});
	}

	render() {
		return (
			<Screen
				title="PlayAudio"
				onMenuPress={this.props.navigation.toggleDrawer}
				style={{
					alignItems: 'flex-start',
				}}
			>

				<Button title="Play" onPress={this.onPlay} />
				<Button title="Pause" onPress={this.onPause} />
				<Button title="Stop" onPress={this.onStop} />

			</Screen>
		);
	}


}