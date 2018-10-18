import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import LoginPage from "./pages/Login"

//side menu

	const DrawerNavigation = createDrawerNavigator({
			Login: {
				screen: LoginPage,
			},
		},{
			initialRouteName: 'Login',
		}
	);


//component

	export default class App extends React.Component {
		render() {
			return <DrawerNavigation />;
		}
	}