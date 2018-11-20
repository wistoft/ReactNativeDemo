import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from 'react-native';

import RNDScreen from "./RNDScreen";


test('renders correctly', () => {
	const tree = renderer.create(
			<RNDScreen 
						title="TestTitle"
						onMenuPress={() => {}}
					>
				<Text>TestPageContent</Text>
			</RNDScreen>
		);
	
		expect(tree).toMatchSnapshot();

});


test('fails when chrilden are missing', () => {
	console.error = jest.fn();
	
	const tree = renderer.create(
		<RNDScreen 
					title="TestTitle"
					onMenuPress={() => {}}
				>
		</RNDScreen>
	);
	
	expect(console.error).toHaveBeenCalledTimes(1);
});


test('fails when title is missing', () => {
	console.error = jest.fn();
	
	const tree = renderer.create(
		<RNDScreen 
					onMenuPress={() => {}}
				>
			<Text>TestPageContent</Text>
		</RNDScreen>
	);
	
	expect(console.error).toHaveBeenCalledTimes(1);
});


test('fails when onMenuPress is missing', () => {
	console.error = jest.fn();
	
	const tree = renderer.create(
		<RNDScreen 
					title="TestTitle"
				>
			<Text>TestPageContent</Text>
		</RNDScreen>
	);
	
	//called twice, because Button component also
	// logs a warning.
	expect(console.error).toHaveBeenCalledTimes(2);
});
