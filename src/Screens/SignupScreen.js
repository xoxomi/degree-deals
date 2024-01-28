import { View, Text, Input, Box, Image, Heading, VStack, Button, Pressable} from 'native-base'
import React from 'react'
import Colors from '../data/Colors'
import { Fontisto, Ionicons, FontAwesome } from '@expo/vector-icons';


const SignupScreen = () => {
  return (
    <Box flex={1} bg={Colors.pastelblue}>
        <Image 
          flex={1} 
          alt="Logo" 
          resizeMode="cover" 
          size="lg" 
          w="full"
          source= {require('../../assets/images/Cover1.png')} 
        />
         <Box
          w="full"
          h="full"
          position="absolute"
          top="0"
          px="6"
          justifyContent="center" 
        >
          <Heading>SIGNUP</Heading>
          <VStack space={5} pt="6">

          <Input
                InputLeftElement={<FontAwesome name="user" size={24} color={Colors.zaffre }/>}
                variant="underlined"
                placeholder='Username'
                w="70%"
                pl={2}
                color={Colors.main}
                borderBottomColor={Colors.egyptianblue}
              />
              <Input
                InputLeftElement={<Fontisto name="email" size={24} color={Colors.zaffre }/>}
                variant="underlined"
                placeholder='user@gmail.com'
                w="70%"
                pl={2}
                color={Colors.main}
                borderBottomColor={Colors.egyptianblue}
              />

              <Input
                InputLeftElement={<Ionicons name="eye-outline" size={24} color={Colors.zaffre }/>
                } 
                variant="underlined"
                placeholder='user password'
                w="70%"
                type='password'
                pl={2}
                color={Colors.main}
                borderBottomColor={Colors.egyptianblue}
              />
          </VStack>

            <Button _pressed={{bg: Colors.main,}} my={30} w="40%" rounded={50} bg={Colors.zaffre}> SIGN UP
            </Button>
            <Pressable mt={4}> 
              <Text color={Colors.main}>LOGIN</Text> 
            </Pressable>

         </Box>
    </Box>
  )
}

export default SignupScreen