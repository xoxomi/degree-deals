import React from 'react'
import { Input, HStack, Box, filled} from "native-base";
import Colors from '../../data/Colors';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


function HomeSearch() {
  return (
    <HStack 
    space={3}
    w="full"
    px={6}
    bg={Colors. blue}
    py={5}
    alignItems="center"
    safeAreaTop
    >
    <Input 
        placeholer="Uniform full set ..." 
        w="90%" 
        bg={Colors.grey} 
        type='search' 
        variant={filled}
        h={12}
        borderWidth={0}
        _focus={{bg: Colors.white}}
    >
    </Input>

    <Pressable ml={3}>
       <FontAwesome5 name="shopping-basket" size={24} color="white" />
        <Box 
            px={1}
            rounded="full"
            position="absolute"
            top={-13}
            left={2}
            bg={Colors.babyblue}
            _text={{color: Colors.white, fontSize:"11px"}}
        />
    </Pressable>
    </HStack>

  )
}

export default HomeSearch