import { View, Text, Center, Box } from 'native-base'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../data/Colors';
import Buttone from './Buttone';

const CartEmty = () => {
  return (
    <Box flex={1} px={4}>
        <Center h="90%">
            <Center w={200} h={200} bg={Colors.grey} rounded="full">
                <FontAwesome name="shopping-basket" size={64} color={Colors.white} />
            </Center>
            <Text color={Colors.white} bold mt={5}>
                    CART IS EMTY
            </Text>
        </Center>
        <Buttone bg={Colors.white} color={Colors.black}>
            START SHOPPING
        </Buttone>
            
    </Box>
  )
}

export default CartEmty