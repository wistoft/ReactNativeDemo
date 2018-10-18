import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import { createDrawerNavigator } from 'react-navigation';


	class LoginPage extends React.Component {
		render() {
			return (
        <View>
          <Text>Hello</Text>
          <Button
            title="print 1"
            onPress={() => console.log(1)}
          />
          
        </View>
      )
		}
	}
	
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