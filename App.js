import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import { Provider } from "react-redux";

import store from "./src/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 0.1 }}>
            <Text>
              Hello World
            </Text>
          </View>
          </View>
      </Provider>
    );
  }
}
