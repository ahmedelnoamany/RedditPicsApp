import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import Posts from './src/Components/Posts.js';
import Users from './src/Components/Users.js';
import Settings from './src/Components/Settings.js';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Posts'
    }
  }

  render() {
    return (
      <TabBarIOS
        selectedTab = {this.state.selectedTab}
        tintColor="black"
        barTintColor="lightblue"
        itemPositioning= "center"
        unselectedTintColor= "white">
        <TabBarIOS.Item
          title= "Top Posts"
          selected= {this.state.selectedTab === 'Posts'}
          //icon = {{uri: 'featured'}}
          onPress= {() => {
            this.setState({
              selectedTab: 'Posts'
            })
          }}>
        <Posts />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title= "Top Users"
          selected = {this.state.selectedTab === 'Users'}
          onPress = {() => {
            this.setState({
              selectedTab: 'Users'
            })
          }}>
          <Users />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Settings"
          selected = {this.state.selectedTab === 'Settings'}
          onPress = {() => {
            this.setState({
              selectedTab: 'Settings'
            })
          }}>
          <Settings />
          </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}
