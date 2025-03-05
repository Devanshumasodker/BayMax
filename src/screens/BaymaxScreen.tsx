import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Constants'
import Background from '../components/baymax/Background'

const BaymaxScreen = () => {
  return (
    <View style={style.container}>

      <Background/>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondry,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loaderContainer:{
    position: 'absolute',

  }

})
export default BaymaxScreen