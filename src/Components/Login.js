import React, { Component } from 'react'
import {
  View,
  Modal,
  TouchableHighlight,
  Text

} from 'react-native'
import styles from '../styles/LoginStyle.js'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state= {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render () {
    return(
      <View style={styles.modalVeiw}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>
              Close
              </Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.setModalVisible(true)
          }}>
          <Text style={{color: 'white'}}>    Login    </Text>
        </TouchableHighlight>

      </View>
    )
  }
}
