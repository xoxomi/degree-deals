import React from 'react';
import { Box, ScrollView, Image, Text, Flex, Heading, Pressable } from "native-base";
import products from "../../data/products";
import Colors from '../../data/Colors';
import { useNavigation } from '@react-navigation/native';

const HomeProducts = () => {
  const navigation = useNavigation();

  const handleProductPress = (productId) => {
    navigation.navigate('SingleProduct', { productId });
  };

  return (
    <ScrollView flex={1}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={1}
      >
        {products.map((product) => (
          <Box
            key={product._id}
            w="49%"
            bg={Colors.blue}
            rounded="md"
            mt={3}
            overflow="hidden"
          >
            <Pressable onPress={() => handleProductPress(product._id)}>
              <Image
                source={{ uri: product.image }}
                alt={product.name}
                w="full"
                h={200}
                resizeMode="cover"
              />
              <Box px={4} pb={4} pt={2}>
                <Heading size="sm" bold color={Colors.white}>
                  ₱{product.price}
                </Heading>
                <Text fontSize={16} mt={1} color={Colors.white} numberOfLines={1}>
                  {product.name}
                </Text>
              </Box>
            </Pressable>
          </Box>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
