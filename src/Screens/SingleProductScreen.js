import React from 'react';
import { Text, Box, ScrollView, Image, Heading, HStack, value, Spacer  } from 'native-base';
import Colors from '../data/Colors';
import NumericInput from "react-native-numeric-input";
import Buttone from './Components/Buttone';
import Review from './Components/Review';


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
            borderColor={Colors.blue}
            rounded
            textColor={Colors.black}
            iconStyle={{color: Colors.white}}
            rightButtonBackgroundColor={Colors.blue}
            leftButtonBackgroundColor={Colors.blue}
          />
          <Spacer>
            <Heading bold color={Colors.black} fontSize={20}>
            ₱500
            </Heading>
          </Spacer>
        </HStack>
        <Text lineHeight={24} fontSize={13}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec sodales nibh, in condimentum ex. Mauris tempus consequat diam, vitae ultrices felis. Pellentesque aliquam mi diam, malesuada semper elit convallis sit amet. Nunc quis tellus efficitur, laoreet libero et, varius lorem. Praesent ac quam libero. Cras molestie orci vel consectetur venenatis. Integer suscipit odio in tellus sodales mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium orci vel sodales euismod. Suspendisse convallis, diam ullamcorper venenatis tincidunt, erat enim vehicula tellus, vitae sagittis arcu erat nec urna. Sed luctus magna magna, nec facilisis dolor cursus non. Fusce quis nunc fringilla, convallis mauris et, commodo ipsum.
        </Text>
          <Buttone bg={Colors.blue} color={Colors.white} mt={10}>
            ADD TO CART
            </Buttone>
            <Review>
              
            </Review>
      </ScrollView>
    </Box>
  );  
}

export default SingleProductScreen;