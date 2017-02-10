import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
  },
  name: {
    borderWidth: 2,
    borderColor: '#081d3f',
    flex: 0.033,
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
})
