import { Text, Center, Box } from 'native-base';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../data/Colors';
import Buttone from './Buttone';
import { useNavigation } from '@react-navigation/native';

const CartEmty = () => {
  const navigation = useNavigation();

  const handleStartShopping = () => {
    // Reset navigation stack to go to the 'Home' screen with Bottom Navigation
    navigation.reset({
      index: 0,
      routes: [{ name: 'Bottom' }],
    });
  };

  return (
    <Box flex={1} px={4}>
      <Center h="85%">
        <Center w={200} h={200} bg={Colors.grey} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={Colors.white} />
        </Center>
        <Text color={Colors.white} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <Buttone mt={20} bg={Colors.white} color={Colors.black} onPress={handleStartShopping}>
        START SHOPPING
      </Buttone>
    </Box>
  );
};

export default CartEmty;