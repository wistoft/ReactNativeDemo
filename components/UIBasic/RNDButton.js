import React from 'react';
import PropTypes from 'prop-types'; 
import { View, Button as ReactNativeButton, StyleSheet } from 'react-native';


export default class Button extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
	}

	render() {
		return (
			
			<View style={styles.buttonWrapper}>
				<ReactNativeButton
					title={this.props.title}
					style={styles.button}
					onPress={this.props.onPress}
					/>
			</View>
			
		);
	}
	

}

let styles = StyleSheet.create({
	buttonWrapper :{
		padding: 10,
		paddingBottom: 0,					//to avoid double padding between buttons
	},
	button :{
	},
});