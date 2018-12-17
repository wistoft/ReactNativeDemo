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
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text style={{ margin: 10 }}>Text elements</Text>

        <Text style={[{ textAlign: "center" }, styles.innerText]}>
          Full width
        </Text>

        <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
          <Text
            style={[{ width: "90%", textAlign: "center" }, styles.innerText]}
          >
            parent width plus margin
          </Text>
        </View>

        <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
          <Text
            style={[
              { paddingHorizontal: 20, textAlign: "center" },
              styles.innerText
            ]}
          >
            Child width plus margin
          </Text>
        </View>

        <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
          <Text style={[{ textAlign: "center" }, styles.innerText]}>
            Child width no margin
          </Text>
        </View>

        {}
        {}
        {}

        <Text style={{ margin: 10 }}>Button elements</Text>

        <Button
          title="Width ignored on button"
          onPress={() => {}}
          style={[{ width: "90%" }]}
        />

        {/*width don't work on button, so a view is need just for that.*/}
        <View style={[{ alignItems: "center", backgroundColor: "yellow" }]}>
          <View style={[{ width: "90%", backgroundColor: "magenta" }]}>
            <Button
              title="Button needs two views to center"
              onPress={() => {}}
            />
          </View>
        </View>

        {/*very hacky, but no other may to get the button to have padding, when
         * it has to be relative to its own width.
         */}
        <View style={{ alignItems: "center" }}>
          <Button title="      Child width      " onPress={() => {}} />
        </View>

        <View style={{ alignItems: "center" }}>
          <Button title="Child width" onPress={() => {}} />
        </View>

        {}
        {}
        {}

        <Text style={{ margin: 10 }}>View elements</Text>

        <View
          style={{
            height: 10,
            backgroundColor: "blue",
            borderRadius: 10
          }}
        />

        <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
          <View
            style={[
              styles.innerContentView,
              {
                height: 10,
                width: "90%"
              }
            ]}
          />
        </View>

        <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
          <View style={{ paddingHorizontal: 10, backgroundColor: "black" }}>
            {/*it's not possible to set padding on this view. Why? Because of width?*/}
            <View style={[styles.innerContentView]} />
          </View>
        </View>

        <View style={{ alignItems: "center", backgroundColor: "yellow" }}>
          <View style={[styles.innerContentView]} />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  innerText: {
    backgroundColor: "blue",
    borderRadius: 10
  },
  innerContentView: {
    height: 10,
    width: 200,
    backgroundColor: "blue",
    borderRadius: 10
  }
});
