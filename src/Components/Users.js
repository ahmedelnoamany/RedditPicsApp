import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  Text
} from 'react-native';


class Users extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Display Users Here
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
    backgroundColor: 'green'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'

  }
})

export default Users;
