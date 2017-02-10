import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import styles from '../styles/TabStyle.js'

export default class Tab extends Component {
  render () {
    let selected = null
    if (this.props.selected){
      selected = {backgroundColor: 'rgba(0,0,0,0.3)'}
    }
    return(
      <TouchableHighlight
        style={[styles.container, selected]}
        onPress={() =>
        this.props.selectTab(this.props.tabNumber)}
        >
        <View style={styles.name}>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
Tab.propTypes = {
  name: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool.isRequired,
  selectTab: React.PropTypes.func.isRequired,
  tabNumber: React.PropTypes.string.isRequired
}
