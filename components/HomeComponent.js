import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Home extends Component {
  static navigationOption = {
    title: "Home",
  };

  render() {
    return (
      <View>
        <Text>Home Component</Text>
      </View>
    );
  }
}
