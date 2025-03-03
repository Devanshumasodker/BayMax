import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
 import { RFValue } from 'react-native-responsive-fontsize'
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
    <Navigation />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App