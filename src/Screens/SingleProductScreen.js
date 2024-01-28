import React from 'react';
import { Box, ScrollView, Image, Heading, HStack, value  } from 'native-base';
import Colors from '../data/Colors';
import NumericInput from "react-native-numeric-input";


function SingleProductScreen() {
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/casioscical.jpg')}
          alt="Image"
          w="full"
          h="300"
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
        Pre-used Casio Science Calculator
        </Heading>
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput 
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.babyblue}
            rightButtonBackgroundColor={Colors.babyblue}
            leftButtonBackgroundColor={Colors.babyblue}
          />
        </HStack>
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
