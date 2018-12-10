import React from "react";
import { View, Text } from "react-native";

import { connect } from "react-redux";

import Screen from "../components/UIBasic/RNDScreen";
import Button from "../components/UIBasic/RNDButton";

import { submitLogin } from "../redux/actions";

class ReduxPage extends React.Component {
  render() {
    const authorized = false;

    const authorizedContent = authorized ? (
      <View style={{ alignItems: "flex-start" }}>
        <Text>You are Logged in.</Text>

        <Button title="Logout" onPress={() => {}} />
      </View>
    ) : (
      <View>
        <Button title="Login" onPress={this.props.onLogin} />
      </View>
    );

    //screen

    return (
      <Screen
        title="Redux"
        onMenuPress={this.props.navigation.toggleDrawer}
        style={{
          alignItems: "flex-start"
        }}
      >
        {authorizedContent}
        <Text>{this.props.showErrorMessage}</Text>
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  return {
    showErrorMessage: "" + state.loginSubmitted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (cprNumber, pass) => dispatch(submitLogin(cprNumber, pass))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxPage);
