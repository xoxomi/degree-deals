import { View, Text, Box, FormControl, Input, ScrollView, VStack} from 'native-base'
import React from 'react'
import Colors from '../../../data/Colors'
import Tabs from './Tabs'

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={10} mt={5} pb={10}>
                <FormControl>
                    <FormControl.Label>
                        
                    </FormControl.Label>
                </FormControl>
            </VStack>
        </ScrollView>
    </Box>
  )
}

export default Profile