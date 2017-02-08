import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  Text
} from 'react-native';


class Settings extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Settings
        </Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'

  },
  text: {
    flex:0.3,
    padding: 30,
    fontSize: 20,
    textAlign: 'center',
    color: 'white'

  }
})
export default Settings;
