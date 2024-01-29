import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Center, Pressable } from 'native-base';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../../HomeScreen';
import ProfileScreen from '../../ProfileScreen';
import CartScreen from '../../CartScreen';
import Colors from '../../../data/Colors';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator(); 
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
      backBehavior="Main"
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.white,
          height: 60,
          elevation: 0,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.blue} />
              ) : (
                <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.blue} />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
            tabBarButton: (props) => <CustomTab {...props} />,
            tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
              ) : (
                <AntDesign name="shoppingcart" size={24} color={Colors.white } />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.blue} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.blue} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
