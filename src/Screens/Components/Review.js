import { View, Text,} from 'react-native'
import React, { useState } from 'react'
import {Box, Heading, VStack, FormControl, Select, CheckIcon} from "native-base"
import Colors from '../../data/Colors'
import Messeges from './Notifications/Messeges';

export default function Review ()  {
    const [ratings, setRatings] = useState ('')
  return (
  <Box my={9}>
        <Heading bold fontSize={19} mb={2}>
                REVIEW
        </Heading>
        <Messeges color={Colors.white}
                bg={Colors.blue}
                size={15}
                bold 
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
                bg={Colors.grey}
                size={10}
                bold
                children={
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                }
                >
                </Messeges>
        </Box>
        <Box mt={6}>
                <Heading>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label 
                        _text={{
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}>
                        </FormControl.Label>
                        Rating
                    </FormControl>
                    <Select
                    bg={Colors.blue}
                    borderWidth={0}
                    rounded={5}
                    py={3}
                    placeholder="Choose Rate"
                    _selectedItem={{
                        bg: Colors.babyblue,
                        endIcon: <CheckIcon size={3} />
                    }}
                    >
                        <Select.Item label="1 - Poor" value="1" />
                        <Select.Item label="2 - Fair" value="2" />
                        <Select.Item label="3 - Good" value="3" />
                    </Select>
                </VStack>
        </Box>
    </Box>
  
  );
}

