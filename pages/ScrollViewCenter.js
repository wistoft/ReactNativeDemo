import React from 'react';

import { Text, TextInput, Button, View, ScrollView
		, StyleSheet, Dimensions,StatusBar } 
		from 'react-native';

export default class Page extends React.Component {

	state = {
		viewOverflow: false,
	}

	render() {

		return (

			<ScrollView contentContainerStyle={[styles.scrollView]}>

				<Text style={{fontSize: 25, textAlign:"center"}}>
					ScrollViewCenter
				</Text>

				<Text>flexGrow works like a charm.</Text>

				<Button
					title="Overflow"
					onPress={() => this.setState(
								old => ({
									viewOverflow: !old.viewOverflow
								})
							)}
				/>

				<View style={styles.fillerView} ></View>


				{ (this.state.viewOverflow) ? (
						<View style={styles.fillerView} ></View>
					) : null
				}

				{ (this.state.viewOverflow) ? (
						<View style={styles.fillerView} ></View>
					) : null
				}

				{ (this.state.viewOverflow) ? (
						<View style={styles.fillerView} ></View>
					) : null
				}

				{ (this.state.viewOverflow) ? (
						<View style={styles.fillerView} ></View>
					) : null
				}

				{ (this.state.viewOverflow) ? (
						<View style={styles.fillerView} ></View>
					) : null
				}

			</ScrollView>
			
		);
	}
	
}




let styles = StyleSheet.create({
	scrollView :{
		flexGrow: 1,
		justifyContent: "center",
		backgroundColor: "blue",
	},
	flexCenter :{
		backgroundColor: "red",
	},
	fillerView :{
		marginTop: 10,
		backgroundColor: "gray",
		height:100,
	},
});
