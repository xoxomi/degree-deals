import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Screens/HomeScreen';
import { NativeBaseProvider, Text, Box,} from "native-base";
import React from 'react';
import LoginScreen from './src/Screens/LoginScreen'
import SignupScreen from './src/Screens/SignupScreen'
import NotVerifyScreen from './src/Screens/NotVerifyScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <SingleProductScreen/>
    </NativeBaseProvider>
  );
}

