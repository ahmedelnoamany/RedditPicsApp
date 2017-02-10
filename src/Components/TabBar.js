import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from '../styles/TabBarStyle.js'
import Tab from './Tab.js'

export default class TabBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
  }

  componentDidMount = () => {
    this.selectTab('Tab1')
  }
  selectTab = (tabName) => {
    this.setState({
      selected: tabName
    })
    this.props.selectedScreen(tabName)
  }
  isSelected = (selected) => {
    if(this.state.selected === selected){
        return true
    }
    return false
  }
  render () {
    return (
      <View style={styles.container}>
        <Tab
          name="Top Posts"
          selected={this.isSelected('Tab1')}
          selectTab={this.selectTab}
          tabNumber='Tab1'
         />
        <Tab
          name="Top Users"
          selected={this.isSelected('Tab2')}
          selectTab={this.selectTab}
          tabNumber='Tab2'
        />
        <Tab
          name="Settings"
          selected = {this.isSelected('Tab3')}
          selectTab={this.selectTab}
          tabNumber='Tab3'
        />
      </View>

    )
  }
}
