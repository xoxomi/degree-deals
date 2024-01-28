import React from 'react';
import { Box, VStack, Center, Image} from 'native-base'; // Assuming VStack is from NativeBase
import Buttone from './Components/Buttone';
import Colors from '../data/Colors'; // Assuming Colors is exported as a default export

const handleSignUp = () => {
  // Implement your sign-up logic here
  console.log('Sign up button pressed');
};

const handleLogin = () => {
  // Implement your login logic here
  console.log('Login button pressed');
};

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.blue} safeAreaTop>
      <Center w="full" h={250}>
        <Image
              source={require("../../assets/images/degreedeals-logo.png")}
              alt="Logo"
              size="lg">
        
          </Image>
        </Center>
        <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.grey} color={Colors.black} onPress={handleSignUp}>
          SIGN UP
        </Buttone>
        <Buttone bg={Colors.grey} color={Colors.white} onPress={handleLogin}>
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
