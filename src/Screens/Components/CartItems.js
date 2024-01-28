import React from 'react'
import {Box, SwipeListView, Pressable, Button, Text, HStack, VStack, Center} from "native-base"
import products from '../../data/products'
import Colors from '../../data/Colors'
import { FontAwesome } from '@expo/vector-icons';

const Swiper = () => (
    <SwipeListView 
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products.slice(0,2)}
        renderItem={renderitem}
        renderHiddenItem={renderHiddenItem}
        showsVerticalScrollIndicator={false}
    />
);

const renderitem = (data, rowMap) => {
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
                alignItems="center" 
                bg={Colors.white} 
                shadow={1} 
                rounded={10} 
                overflow="hidden">
                
                <Center w="25%" bg={Colors.grey}>
                    <Image source={{uri:data.item.image}}
                    alt={data.item.name}
                    w="full"
                    h={24}
                    resizeMode='contain'
                    />
                </Center>
                <VStack w="60%" px={2}>
                    <Text isTruncated color={Colors.black} bold fontSize={10}>
                        {data.item.name}
                    </Text>
                    <Text bold color={Colors.aqua}>
                    ₱{data.item.price}
                    </Text>
                </VStack>
                <Center>
                    <Button
                        bg={Colors.blue}
                        _pressed={{ bg: Colors.blue}}
                        _text={{ color: Colors.white,
                        }}
                    >
                        5
                    </Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>;
};

const renderHiddenItem = () => {
    <Pressable w={50} 
        roundedTopRight={10} 
        roundedBottomRight={10} 
        h="88%" 
        ml="auto" 
        ustifyContent="center" 
        bg={Colors.red}
        >
        <Center alignItems="center" space={2}>
            <FontAwesome name="trash" size={24} color={Colors.white} />
        </Center>

        <Box ml={6} mb={3}>
        </Box>
    </Pressable>
}
const CartItems = () => {
  return (
    <Box mr={6}>
        <Swiper />
    </Box>
  )
};

export default CartItems