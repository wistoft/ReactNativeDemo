import React from 'react';

import { Text, TextInput, Button, View, ScrollView, StyleSheet } from 'react-native';

export default class Page extends React.Component {

	state = {
		scrollView: false,
	}

	render() {

		const Outer = this.state.scrollView ? ScrollView : View;

		return (

			<Outer style={styles.outerView}>


				<View style={styles.flexUp} >

					<Text style={{fontSize: 25, textAlign:"center"}}>
						ViewFloatDown
					</Text>

					<Text>{"Outer: " + (this.state.scrollView ? "ScrollView" : "View")}</Text>

					<Text>Using flex:1. Only works for View. ScrollView will not respect flex attribute.</Text>

					<Button
						title="Toogle"
						onPress={() => this.setState(
									old => ({
										scrollView: !old.scrollView
									})
								)}
					/>

					<Text>End of flexUp</Text>

				</View>


				<View style={styles.flexDown} >

					<Text>Start of flexDown</Text>

					<View style={styles.fillerView} ></View>

					<View style={styles.fillerView} ></View>

					<Text>End of flexDown</Text>
				
				</View>


			</Outer>
			
		);
	}
	
}




let styles = StyleSheet.create({
	outerView :{
		//scrollview ignores both flex and height
		flex: 1,						//takes presedence in view
		height: 600,				//ignored in view
		backgroundColor: "blue",
	},
	flexUp :{
		backgroundColor: "red",
	},
	flexDown :{
		//take all space in the view.
		//not possible in a scrollview, as that would be infinity. (too much to ask for)
		flex: 1,
		//float children down
		justifyContent: "flex-end",
		backgroundColor: "yellow",
	},
	fillerView :{
		marginTop: 10,
		backgroundColor: "gray",
		height:100,
	},
});
