import { View, Text } from 'react-native'
import React, { FC } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import BaymaxScreen from '../screens/BaymaxScreen'
import { navigationRef } from '../utils/NavigationUtils'


const stack = createNativeStackNavigator()
const Navigation:FC = () => {
  return (
     <NavigationContainer ref={ navigationRef}>
         <stack.Navigator
         initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false
            }}
         >
            <stack.Screen name="SplashScreen" component={SplashScreen} />
            <stack.Screen name="BaymaxScreen" component={BaymaxScreen} />
         </stack.Navigator>

     </NavigationContainer>
  )
}

export default Navigation