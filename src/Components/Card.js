import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

class Card extends Component {
  render (){
    const cuStyles = this.props.styles || {};
    return(
      <View style={[styles.container, styles.card, cuStyles.card]}>
        {this.props.children}
      </View>
    );
  }
}
class cardTitle  extends Component{
  render (){
    const style = this.props.styles || {};
    return (
      <View style={[styles.container, styles.cardTitle, styles.cardTitle]}>
        {this.props.children}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    margin: 5
  },
  card: {
    borderRadius: 2
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    padding: 16
  },
})
export default{
  Card,
  cardTitle,
}
