import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../../HomeScreen'
import SingleProductScreen from '../../SingleProductScreen';

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleProductScreen} />
  


      </Stack.Navigator>
  )
}

export default StackNav