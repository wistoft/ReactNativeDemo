import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
 
import Video from 'react-native-video';
 
import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class Page extends React.Component {

	state = {
		videoPaused: true,
		fullScreenMode: false,
	}
	
	onPlay = () => {

		this.setState({
			videoPaused: false,
		});
	}
	
	onPause = () => {
		this.setState({
			videoPaused: true,
		});
	}
	
	onFullscreen = () => {
		this.player.presentFullscreenPlayer();
	}
	
	onFullscreenPlayerDidPresent = () => {
		this.setState({
			fullScreenMode: true,
		});
	}
	
	onNormalScreen = () => {
		this.player.dismissFullscreenPlayer();
	}
	
	onFullscreenPlayerDidDismiss = () => {
		this.setState({
			fullScreenMode: false,
		});
	}
	
	
	render() {

		//A view with styles, and styles on the video component are necessary.
		const videoComponent = (

						<View style={{ flex: 1, width:"100%" }} >
							<Video 
								source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
								ref={(ref) => { this.player = ref }}
								style={styles.backgroundVideo} 
								paused={this.state.videoPaused}
								onFullscreenPlayerDidPresent={this.onFullscreenPlayerDidPresent}
								onFullscreenPlayerDidDismiss={this.onFullscreenPlayerDidDismiss}
							/>
						</View>
		);

		const fullScreenButton = this.state.fullScreenMode ?
			(
				<View style={styles.buttonWrapper}>
					<Button title="Normal Screen" onPress={this.onNormalScreen} />
				</View>
			):(
				<View style={styles.buttonWrapper}>
					<Button title="Full Screen" onPress={this.onFullscreen} />
				</View>
			)
			;

		return (
			<Screen
					title="Video"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>

				<View style={styles.buttonRow} >
					
					<View style={styles.buttonWrapper}>

						<Button title="Play" onPress={this.onPlay} />
						
					</View>

					<View style={styles.buttonWrapper}>

						<Button title="Pause" onPress={this.onPause} />
						
					</View>
					
					{fullScreenButton}

				</View>

				{videoComponent}

			</Screen>		
		);
	}
	

}


const styles = StyleSheet.create({
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	buttonRow :{
		width:"100%",
		flexDirection:"row",
		alignItems: "center",
	},
	buttonWrapper :{
		padding: 5,

	},
});