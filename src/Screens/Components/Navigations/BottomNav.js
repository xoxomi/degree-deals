import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../HomeScreen'
import Colors from '../../../data/Colors'
import { Center } from "native-base";
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from '../../ProfileScreen'
import CartScreen from '../../CartScreen'


const Tab = createBottomTabNavigator()
const CustomTab = ({children, onPress}) => (
    <Pressable 
        onPress={onPress} 
        h={70} 
        w={70} 
        rounded="full" 
        bg={Colors.blue} 
        top={-30} 
        shadow={2}
     >
        {children}
    </Pressable>
);
const BottomNav = () => {
  return (
    <Tab.Navigator 
    backBehavior="main" 
    initialRouteName="Main" 
    screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{...styles.tab},
        headerShown:false,
        tabBarHideOnKeyboard: true

    }}>
        <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
            tabBarIcon:({focused}) => (
            <Center>
                {focused ? (
                    <Entypo 
                    name="home" 
                    size={24} 
                    color={Colors.blue} />
                ) : (
                    <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
                )}
            </Center>
            )
        }}/>
        <Tab.Screen 
        name='Cart' 
        component={CartScreen} 
        options={{ tabBarButton:(props) => 
        <CustomTab {...props} />,           
         tabBarIcon:({focused}) => (
            <Center>
                {focused ? (
                    <FontAwesome5 
                    name="shopping-basket" 
                    size={24} 
                    color={Colors.white} />
                ) : (
                    <AntDesign 
                    name="home" 
                    size={24} 
                    color={Colors.white} />
                )}
            </Center>
            )
        }}/>
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
            tabBarIcon:({focused}) => (
            <Center>
                {focused ? (
                    <FontAwesome name="home" size={24} color={Colors.blue} />
                ) : (
                    <AntDesign name="" size={24} color={Colors.black} />
                )}
            </Center>
            )
        }}/>
        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60,
      
    },
})


export default BottomNav