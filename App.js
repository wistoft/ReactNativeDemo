import React from "react";
import { Text, View, Button } from "react-native";

import { createDrawerNavigator } from "react-navigation";

import { Provider } from "react-redux";

import createStore from "./redux/createStore";

//demo of native modules
import LoginPage from "./pages/Login";
import CameraPage from "./pages/Camera";
import PlayAudio from "./pages/PlayAudio";
import RecordAudio from "./pages/RecordAudio";
import VideoPage from "./pages/Video";
import PushNotificationPage from "./pages/PushNotification";
import PushNotificationIOSPage from "./pages/PushNotificationIOS";
import PermissionsPage from "./pages/Permissions";
import InternetPage from "./pages/Internet";
import ReduxPage from "./pages/Redux";

//demo of  Yoga design
import ViewFloatDown from "./pages/design/ViewFloatDown";
import ScrollViewFloatDown from "./pages/design/ScrollViewFloatDown";
import ScrollViewCenter from "./pages/design/ScrollViewCenter";
import StrechView from "./pages/design/StrechView";
import CenterView from "./pages/design/CenterView";

//on ready

console.log("loading.");

//side menu

const DrawerNavigation = createDrawerNavigator(
  {
    Login: {
      screen: LoginPage
    },
    Camera: {
      screen: CameraPage
    },
    PlayAudio: {
      screen: PlayAudio
    },
    RecordAudio: {
      screen: RecordAudio
    },
    PushNotification: {
      screen: PushNotificationPage
    },
    PushNotificationIOS: {
      screen: PushNotificationIOSPage
    },
    Video: {
      screen: VideoPage
    },
    Permissions: {
      screen: PermissionsPage
    },
    Internet: {
      screen: InternetPage
    },
    Redux: {
      screen: ReduxPage
    },
    ViewFloatDown: {
      screen: ViewFloatDown
    },
    ScrollViewFloatDown: {
      screen: ScrollViewFloatDown
    },
    ScrollViewCenter: {
      screen: ScrollViewCenter
    },
    StrechView: {
      screen: StrechView
    },
    CenterView: {
      screen: CenterView
    }
  },
  {
    initialRouteName: "Redux"
  }
);

//component

const store = createStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DrawerNavigation />
      </Provider>
    );
  }
}
