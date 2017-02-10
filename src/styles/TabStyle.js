import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
  },
  name: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    flex: 0.033,
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
