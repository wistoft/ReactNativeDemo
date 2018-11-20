import React from 'react';

import { Text, TextInput, Button, View, ScrollView
		, StyleSheet, Dimensions,StatusBar } 
		from 'react-native';

export default class Page extends React.Component {

	state = {
		scrollView: true,
		viewOverflow: true,
	}

	render() {

		console.log(Dimensions.get("window"));	//smallest
		console.log(Dimensions.get("screen"));

		const window = Dimensions.get("window");
		const screen = Dimensions.get("screen");

		const height = window.height;
		const width = window.width;

		const heightCorrection = 24;	//same as StatusBar.currentHeight

		const Outer = this.state.scrollView ? ScrollView : View;

		return (

			<Outer style={[styles.outerView]}>

				<View style={[styles.minHeightView, {minHeight: height - heightCorrection}]} >


					<View style={styles.flexUp} >

						<Text style={{fontSize: 25, textAlign:"center"}}>
							ScrollViewFloatDown
						</Text>

						<Text>{"Outer: " + (this.state.scrollView ? "ScrollView" : "View")}</Text>
						<Text>Using minHeight. Only works for ScrollView. View will overflow.</Text>

						<Button
							title="Outer component"
							onPress={() => this.setState(
										old => ({
											scrollView: !old.scrollView
										})
									)}
						/>

						<Button
							title="Overflow"
							onPress={() => this.setState(
										old => ({
											viewOverflow: !old.viewOverflow
										})
									)}
						/>

						<Text>window: {parseInt(window.width)} x {parseInt(window.height)}</Text>
						<Text>screen: {parseInt(screen.width)} x {parseInt(screen.height)}</Text>
						<Text>statusbar: {StatusBar.currentHeight}</Text>
						<Text>correct correction: {heightCorrection}</Text>

						<Text>End of flexUp</Text>

					</View>


					<View style={styles.flexDown} >

						<Text>Start of flexDown</Text>

						<View style={styles.fillerView} ></View>

						<View style={styles.fillerView} ></View>

						{ (this.state.viewOverflow) ? (
								<View style={styles.fillerView} ></View>
							) : null
						}

						{ (this.state.viewOverflow) ? (
								<View style={styles.fillerView} ></View>
							) : null
						}

						<Text>End of flexDown</Text>

					</View>


				</View>
			</Outer>
			
		);
	}
	
}




let styles = StyleSheet.create({
	outerView :{
		backgroundColor: "blue",
	},
	minHeightView :{
		//a view with minHeight is needed, as ScrollView has no height.
		backgroundColor: "steelblue",
	},
	flexUp :{
		backgroundColor: "red",
	},
	flexDown :{
		//take all space in the view.
		//only possible because there is a minHeight on parent
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
