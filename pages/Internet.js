import React from 'react';
import { Text, NetInfo } from 'react-native';

// import {NetInfo} from "expo";

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";
import Image from "../components/UIBasic/RNDImage";

export default class Page extends React.Component {

	state = {
		conType: "Unknown",
		eventLog: "",
	}
	
	async componentWillMount() {
		
		this.checkInternet();
		  
		NetInfo.addEventListener('connectionChange', (info) => {
				this.setState(stale => ({
					conType: info.type,
					eventLog: stale.eventLog + info.type + ", ",
				}));
			}
		);

	}

	checkInternet = () => {
		NetInfo.getConnectionInfo().then((info) => {

			//console.log('Initial, type: ' + info.type + ', effectiveType: ' + info.effectiveType);
			
			this.setState({
				conType: info.type,
			});
				
		});

	}

	
	render() {
		return (
			<Screen
					title="Internet"
					onMenuPress={this.props.navigation.toggleDrawer}
					style={{
						alignItems: 'flex-start',
					}}
				>


				<Text>Connection type: {this.state.conType}</Text>
				
				<Button title="Check" onPress={this.checkInternet} />

				<Text>Events:</Text>
				<Text>{this.state.eventLog}</Text>
			

				
			</Screen>		
		);
	}
	

}