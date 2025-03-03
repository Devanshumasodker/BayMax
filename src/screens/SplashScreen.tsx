import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    const navigation = useNavigation()
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('BaymaxScreen')}>
            <Text>Navigate to BayMax Screen</Text>

        </TouchableOpacity>

    </View>
  )
}

export default SplashScreen