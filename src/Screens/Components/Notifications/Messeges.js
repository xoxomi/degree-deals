import { Center, Text, View} from "native-base";
import React from 'react'

export default function Messeges({ bg, color, children, size, bold}) {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size} bold={bold}>
        {children}
      </Text>
    </Center>
  )
}