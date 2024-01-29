import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import LoginScreen from './LoginScreen';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Add any necessary initialization logic here
    // For example, you might check if the user is already logged in and navigate accordingly
    // For now, let's navigate to the Login screen after a short delay
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000); // Replace 'Login' with the actual name of your Login screen

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Customize your splash screen content */}
      <Image
        source={require('../../assets/images/degreedeals-logo.png')} // Replace with the actual path to your logo
        style={{ width: 240, height: 250, resizeMode: 'contain' }} // Adjust width and height as needed
      />
    </View>
  );
};

export default SplashScreen;
