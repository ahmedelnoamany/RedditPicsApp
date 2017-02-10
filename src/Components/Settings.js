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
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'

  },
  text: {
    padding: 30,
    fontSize: 20,
    textAlign: 'center',
    color: 'white'

  }
})
export default Settings;
