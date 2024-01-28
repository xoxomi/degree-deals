import { View, Text,} from 'react-native'
import React from 'react'
import {Box, Heading } from "native-base"
import Colors from '../../data/Colors'
import Messeges from './Notifications/Messeges';

export default function Review ()  {
  return (
  <Box my={9}>
        <Heading bold fontSize={19} mb={2}>
                REVIEW
        </Heading>
        <Messeges color={Colors.white}
                bg={Colors.blue}
                size={15}
                children={
                    "NO REVIEWS"
                }
                >

                </Messeges>
        <Box p={3} bg={Colors.steelblue} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                        User Prtty
                </Heading>
                <Text my={2} fontSize={12}>Jan 08, 2024</Text>
                <Messeges color={Colors.black}
                bg={Colors.white}
                size={10}
                children={
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                }
                >

                </Messeges>
        </Box>
    </Box>
  
  );
}

