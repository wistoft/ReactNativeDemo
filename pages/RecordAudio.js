import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import Sound from 'react-native-sound';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

//@see https://github.com/jsierles/react-native-audio/blob/master/AudioExample/AudioExample.js
//It works, but more heavy on UI.

export default class Page extends React.Component {

	constructor() {
		super();

		this.audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

		console.log("Path: " + this.audioPath);

	}

	onStartRecording = () => {

		//prepare

			console.log("Preparing");

			AudioRecorder.prepareRecordingAtPath(this.audioPath, {
				SampleRate: 22050,
				Channels: 1,
				AudioQuality: "Low",
				AudioEncoding: "aac"
			});

			AudioRecorder.onProgress = (data) => {
				console.log("DATA: " + data)
			};

		//record
			
			console.log("Starting.");

			AudioRecorder.startRecording();
	}
	
	onStopRecording = () => {
		AudioRecorder.stopRecording();
	}

	//TOOT: how many timeouts are needed.
	onPlay = () => {
		
        // These timeouts are a hacky workaround for some issues with react-native-sound.
        // See https://github.com/zmxv/react-native-sound/issues/89.
        setTimeout(() => {
            var sound = new Sound(this.audioPath, '', (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                }
            });

            setTimeout(() => {
                sound.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            }, 100);
        }, 100);
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

				<Button title="Record" onPress={this.onStartRecording} />
				<Button title="Stop" onPress={this.onStopRecording} />

				<Button title="Play" onPress={this.onPlay} />

			</Screen>
		);
	}


}