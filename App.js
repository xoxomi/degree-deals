import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { NativeBaseProvider, StatusBar } from "native-base";
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import Screens
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import SignupScreen from './src/Screens/SignupScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';
import CartScreen from './src/Screens/CartScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import BottomNav from './src/Screens/Components/Navigations/BottomNav';
import SplashScreen from './src/Screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator 
        initialRouteName="Splash" 
        screenOptions={{
           headerShown: false,
           }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
