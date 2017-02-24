import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  TouchableHighlight
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
          <Posts
            />
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
  goToPage = (name) => {
    if (name === "Main Scene"){
      if(route.index === 0){
        return
      }
      navigator.pop()
    }
    else if (name === "Comments Scene"){
      if(route.index === 1){
        return
      }
      navigator.push(routes[1])
    }

  }

  render() {
    const routes = [
      {title: 'Main Scene', index: 0},
      {title: 'Comments Scene', index: 1},
    ]
    return (
      <Provider store={store}>
        <View style= {{flex: 1}}>
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={(route, navigator) =>
              <View style={{flex:0.1}}>
                {this.state.currentScreen}
                <TabBar
                  selectedScreen={this.selectedScreen}
                />
              {/* <TouchableHighlight onPress={() => {
                if (route.index === 0){
                  navigator.push(routes[1])
                }
                else {
                  navigator.pop()
                }
              }}>
              <Text>Hello {route.title} </Text>
            </TouchableHighlight> */}
          </View>
          }
        />
      </View>
      </Provider>
    );
  }
}
