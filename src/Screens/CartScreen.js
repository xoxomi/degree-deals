import {Box, Text, View, HStack, Center, ScrollView} from "native-base";
import React from 'react'
import Colors from "../data/Colors";
import CartEmty from "./Components/CartEmty";
import CartItems from "./Components/CartItems";
import { Button } from "react-native";
import Buttone from "./Components/Buttone";


function CartScreen (){
  return (
    <Box flex={1} safeAreaTop bg={Colors.blue}>
      <Center w="full" py={10}>
        <Text color={Colors.white} fontSize={30} bold> Cart</Text>
      </Center>

      <CartEmty />

   {/* <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems></CartItems> 
        <Center mt={5}>
        <HStack
          justifyContent="space-between"
          bg={Colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
        >
          <Text> Total </Text>
          <Button 
          px={10} 
          h={10} rounded={50} 
          bg={Colors.blue} 
          _text={{ color: Colors.white, 
          fontWeight: "semibold",
        }}
        _pressed={{
          bg: Colors.babyblue,
        }}
          >
          ₱500
          </Button>
          </HStack>
        </Center>
          <Center px={5} >
            <Buttone bg={Colors.black} color={Colors.white} mt={10}>
              CHECKOUT
            </Buttone>
        </Center>
      </ScrollView>  */} 
    </Box>
  )
}

export default CartScreen