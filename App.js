import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import { Provider } from "react-redux";

import store from "./src/store";
import TabBar from './src/Components/TabBar.js';
import Posts from './src/Components/Posts.js';
import Users from './src/Components/Users.js';
import Settings from './src/Components/Settings.js';
import Comments from './src/Components/Comments.js';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Posts'
    }
  }
  selectedScreen = (screen) => {
    if(screen === 'Tab1'){
      this.setState({
        currentScreen: (<View style={{ flex: 0.9 }}>
          <Posts />
        </View>)
      })
    }
    if(screen === 'Tab2'){
      this.setState({
        currentScreen: (<View style={{ flex: 0.9 }}>
          <Users />
        </View>)
      })
    }
    if(screen === 'Tab3'){
      this.setState({
        currentScreen: (<View style={{ flex: 0.9 }}>
          <Settings />
        </View>)
      })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {this.state.currentScreen}
          <View style={{ flex: 0.1 }}>
            <TabBar
              selectedScreen={this.selectedScreen}
            />
          </View>
          </View>
      </Provider>
    );
  }
}
