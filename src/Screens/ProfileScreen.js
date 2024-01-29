import React from 'react';
import { View, Text, Center, Heading, Box, Pressable, HStack, Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../data/Colors';

function ProfileScreen() {
  const handleLogout = () => {
    // Logic for logging out
    console.log("Logout pressed");
  };

  return (
    <View flex={1}>
      <Center bg={Colors.pastelblue} pt={20} pb={6}>
        <FontAwesome name="user-o" size={75} color="black" />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          12345666
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Jan 01, 2024
        </Text>
      </Center>
      <Center bg={Colors.pastelblue} p={2} mt={2}>
        <Text bold fontSize={17} color={Colors.white}>
          Remaining Balance: 
          ₱300
        </Text>
      </Center>
      <Box p={2} borderWidth={6} borderColor={Colors.pastelblue}>
        <Heading fontSize={16} mb={2} color={Colors.babyblue}>
          Description
        </Heading>
        <Text fontSize={14} color={Colors.black}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec semper nisl.
          Donec mollis orci eu nisi dignissim, ut fermentum magna porta. Duis pulvinar
          lacus in accumsan suscipit.
        </Text>
      </Box>
      <HStack space={4} mt={4}>
        <Pressable onPress={() => console.log("Account settings pressed")}>
          <HStack alignItems="center">
            <FontAwesome name="cog" size={24} color={Colors.blue} />
            <Text fontSize={16} color={Colors.blue}>
              Account Settings
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <HStack space={4} mt={5}>
        <Pressable onPress={() => console.log("Help Center pressed")}>
          <HStack alignItems="center">
            <FontAwesome name="question-circle-o" size={30} color={Colors.blue} />
            <Text fontSize={16} color={Colors.blue}>
              Help Center
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <HStack space={4} mt={5}>
        <Pressable onPress={() => console.log("Chat with Degree Deals pressed")}>
          <HStack alignItems="center">
            <FontAwesome name="comments-o" size={24} color={Colors.blue} />
            <Text fontSize={16} color={Colors.blue}>
                Chat with Degree Deals
            </Text>
          </HStack>
        </Pressable>
      </HStack>
      <Button size="sm" mt={4} bg={Colors.pastelblue} onPress={handleLogout}>
        Logout
      </Button>
    </View>
  );
}

export default ProfileScreen;
