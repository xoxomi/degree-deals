import { View, Text, Input, Box, Image, Heading, VStack, Button, Pressable} from 'native-base'
import React from 'react'
import Colors from '../data/Colors'
import { Fontisto, Ionicons } from '@expo/vector-icons';


function LoginScreen ({navigation}) {
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
          <Heading>LOGIN</Heading>
          <VStack space={5} pt="6">
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
                InputLeftElement={<Ionicons name="eye-outline" 
                size={24} 
                color={Colors.zaffre }/>
                } 
                variant="underlined"
                placeholder='user password'
                w="70%"
                type='password'
                pl={2}
                color={Colors.white}
                borderBottomColor={Colors.egyptianblue}
              />
          </VStack>

            <Button 
              _pressed={{bg: Colors.main,}} 
              my={30} 
              w="40%" 
              rounded={50} 
              bg={Colors.zaffre}
              onPress={() => navigation.navigate("Bottom")}> 


            LOGIN 
            </Button>
            <Pressable mt={4} onPress={() => navigation.navigate("Signup")}> 
              <Text color={Colors.white}>
                SIGN UP
                </Text> 
            </Pressable>

         </Box>
    </Box>
  )
}

export default LoginScreen