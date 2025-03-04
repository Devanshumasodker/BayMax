import { View, Text, StyleSheet, Image} from 'react-native'
import React, { FC, use, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { navigate, resetAndNavigate } from '../utils/NavigationUtils'
import { Colors, Fonts, lightColors } from '../utils/Constants'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { screenHeight, screenWidth } from '../utils/Scaling'
import LinearGradient from 'react-native-linear-gradient'
import CustomText from '../components/Global/CustomText'
import LottieView from 'lottie-react-native'
import Tts from 'react-native-tts'
import { initiazeTTSListeners } from '../utils/ttsListeners'

const bottomColors = [...lightColors].reverse()
const SplashScreen:FC = () => {

  const baymaxAnimation = useSharedValue(screenHeight * 0.8)
  const messageContainerAnimation = useSharedValue(screenHeight * 0.8)
  const launchAnimation = async () => {
    messageContainerAnimation.value = screenWidth * 0.001

    launchAnimation()
setTimeout(() => {

  console.log('TTS initialized')
baymaxAnimation.value = -screenHeight * 0.02
// Tts.speak('Hello there! I am Baymax,')
}, 600)

setTimeout(() => {

  resetAndNavigate('BaymaxScreen')
}, 4000)

  }

  useEffect(() => {
    initiazeTTSListeners()
    launchAnimation()
  }, [])

  
  const animateImageStyle = useAnimatedStyle( () => 
  {
return {
  transform : [{translateY: withTiming(baymaxAnimation.value, {duration: 1500})}]
}
  })


  const messageContainerStyle = useAnimatedStyle( () => 
  {
return {
  transform : [{translateY: withTiming(messageContainerAnimation.value, {duration: 1200})}]
}
  })


    // const navigation = useNavigation()
  return (



    <View style={style.container}>
        {/* <TouchableOpacity onPress={() => navigate('BaymaxScreen')}>
            <Text>Navigate to BayMax Screen</Text>

        </TouchableOpacity> */}

        <Animated.View
        style={[style.imageContainer , animateImageStyle ]}
        >
         <Image source={require('../assets/images/launch.png')} style={style.img}
         ></Image>
        </Animated.View>

        <Animated.View  style={[style.gradientContainer, messageContainerStyle]}>
          <LinearGradient colors={bottomColors} style={style.gradient}>

              <View style={style.textContainer}>
                <CustomText
                fontSize={34} fontFamily={Fonts.Theme}
                >
                  BayMax!
                </CustomText>
                <LottieView
                source={require('../assets/animations/sync.json')}
                style={{width: 280, height: 100}}
                autoPlay={true}
                loop

                />   

                <CustomText>
                  Synchronizing the Best for you dude wait.....
                </CustomText>
                
              </View>
          </LinearGradient>
        </Animated.View>

    </View>


    
  )
}
 



const style = StyleSheet.create(
    {
      gradientContainer:{
        position: 'absolute',
        bottom: 0,
        height: '35%',
        width: '100%',
    
        
      }
      ,gradient:{
        paddingTop: 30,
        height:'100%',
        width:'100%',
      },
        container:{
            flex:1,
            backgroundColor: Colors.primary,
            justifyContent:'center',
            alignItems:'center'
        },

        textContainer:{
          backgroundColor: 'white',
          flex:1,
          borderRadius: 20,
          padding: 20,
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 1,
          shadowRadius: 2,
          alignItems: 'center',
          shadowColor: Colors.border,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,



        },

        imageContainer:{
          width: screenWidth-20,
          height: screenWidth* 0.5,
        },

        img: {
          width: '100%',
          height: '150%',
          resizeMode: 'contain'
        },


    }
)
export default SplashScreen

