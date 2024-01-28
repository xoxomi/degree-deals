import React from 'react'
import { Box, Text, View} from "native-base";
import Colors from '../data/Colors';
import HomeSearch from './Components/HomeSearch';
import HomeProducts from './Components/HomeProducts';

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.periwinkle}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen;