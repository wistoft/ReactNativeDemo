import React from 'react';
import PropTypes from 'prop-types'; 
import { View, Text, Button, StyleSheet } from 'react-native';


//the content area has {flex: 1}, but otherwise default styling.
//styles for the screen component, will apply to the content area. Not to top menu.
export default class Screen extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		onMenuPress: PropTypes.func.isRequired,
		children: PropTypes.node.isRequired,
	}

	render() {
		return (

			<View style={styles.screen}>

				<View style={styles.topMenu}>
					<Button
						title="Menu"
						onPress={this.props.onMenuPress}
					/>
					<Text style={styles.topMenuText}>{this.props.title}</Text>
				</View>

				<View style={[{flex: 1}, this.props.style]}>

					{this.props.children}

				</View>

			</View>
			
		);
	}

}


let styles = StyleSheet.create({
	screen :{
		flex: 1, 
		marginTop : 24,						//to avoid display under status bar on android
		//backgroundColor: "green",

	},
	topMenu :{
		padding: 5,
		paddingLeft: 15,
		flexDirection: "row",
		justifyContent: 'flex-start', 
		alignItems: 'center', 
		borderBottomWidth: 1,
		borderColor: "#ddd",
		backgroundColor: "#eee",
	},
	topMenuText :{
		paddingLeft: 10,
		fontSize: 17,
	},
});
