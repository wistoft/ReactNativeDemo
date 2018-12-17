import React from "react";

import {
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  StyleSheet
} from "react-native";

export default class Page extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "khaki" }}>
        <Text style={{ margin: 10 }}>Text elements</Text>

        <Text
          style={[{ textAlign: "center", width: "100%" }, styles.innerText]}
        >
          Full width
        </Text>

        <Text style={[{ textAlign: "center", width: "90%" }, styles.innerText]}>
          parent width plus margin
        </Text>

        <Text style={[{ paddingHorizontal: 20 }, styles.innerText]}>
          Child width plus margin
        </Text>

        <Text style={[{}, styles.innerText]}>Child width no margin</Text>

        {}
        {}
        {}

        <Text style={{ margin: 10 }}>Button elements</Text>

        <View style={{ width: "100%", alignItems: "stretch" }}>
          <Button title="full width" onPress={() => {}} />
        </View>

        <View style={{ width: "90%", alignItems: "stretch" }}>
          <Button title="Parent width plus margin" onPress={() => {}} />
        </View>

        {/*very hacky, but no other may to get the button to have padding, when
         * it has to be relative to its own width.
         */}
        <View style={{ alignItems: "center" }}>
          <Button title="      Child width      " onPress={() => {}} />
        </View>

        <Button title="Child width" onPress={() => {}} />

        {}
        {}
        {}

        <Text style={{ margin: 10 }}>View elements</Text>

        <View
          style={{
            height: 10,
            width: "100%",
            backgroundColor: "indianred",
            borderRadius: 10
          }}
        />

        <View
          style={{
            height: 10,
            width: "90%",
            backgroundColor: "indianred",
            borderRadius: 10
          }}
        />

        <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
          <View style={{ backgroundColor: "black", paddingHorizontal: 10 }}>
            {/*it's not possible to set padding on this view. Why? Because of width?*/}
            <View style={[styles.innerContentView]} />
          </View>
        </View>

        <View style={[styles.innerContentView]} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  innerText: {
    backgroundColor: "indianred",
    borderRadius: 10
  },
  innerContentView: {
    height: 10,
    width: 200,
    backgroundColor: "indianred",
    borderRadius: 10
  }
});
