import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';

import LoginPage from './pages/Login';
// import CameraPage from './pages/Camera';
// import PlayAudio from './pages/PlayAudio';
// import RecordAudio from './pages/RecordAudio';
import VideoPage from './pages/Video';
// import PushNotificationPage from './pages/PushNotification';
// import PermissionsPage from './pages/Permissions';
import InternetPage from './pages/Internet';


//on ready

	console.log("loading.");

//side menu

	const DrawerNavigation = createDrawerNavigator({
		Login: {
			screen: LoginPage,
		},
		// Camera: {
		// 	screen: CameraPage,
		// },
		// PlayAudio: {
		// 	screen: PlayAudio,
		// },
		// RecordAudio: {
		// 	screen: RecordAudio,
		// },
		// PushNotification: {
		// 	screen: PushNotificationPage,
		// },
		Video: {
			screen: VideoPage,
		},
		// Permissions: {
		// 	screen: PermissionsPage,
		// },
		Internet: {
			screen: InternetPage,
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