import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from '../styles/TabBarStyle.js'
import Tab from './Tab.js'

import store from '../store'

export default class TabBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
  }

  componentDidMount = () => {
    this.props.selectTab("Posts")
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
const mapStateToProps = state => {
  return {
    selected: state.selected
  }
}
const mapDispatchToProps = dispatch => ({
  selectTab: (name) => {
    dispatch(selectTab(name))
  }
})
