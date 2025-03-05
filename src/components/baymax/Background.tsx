import { View, Text, StyleSheet, Image, Animated } from 'react-native'
import React, { FC } from 'react'
import { screenHeight, screenWidth } from '../../utils/Scaling'
import { BlurView } from '@react-native-community/blur'

const Background: FC<{ blurOpacity: any }> = ({blurOpacity}) => {
  return (
    <View style={styles.imageContainer} >
     
     <Image
     source={require('../../assets/images/baymax.png')}
        style={styles.img}      
     />
     <Animated.View>
        <BlurView/>
     </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
        flex: 1,
        width: screenWidth,
        height: screenHeight * 1.2,
        position: 'absolute',
        zIndex: 4,
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode: 'cover',
        bottom: -screenHeight * 0.2,
    }
})

export default Background