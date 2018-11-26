import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from 'react-native';

import RNDImage from "./RNDImage";

test('renders correctly', () => {
	const tree = renderer.create(
			<RNDImage 
					source={{uri:"TestURL"}}
					style={{width:100}} 
				>
			</RNDImage>
		);
	
		expect(tree).toMatchSnapshot();
});
