import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native'; // Import StyleSheet
import { useWindowDimensions } from 'react-native';
import Profile from './Profile';
import Orders from './Orders';
import Colors from '../../../data/Colors';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

const renderScene = SceneMap({
  first: Profile,
  second: Orders
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS"
    },
  ]);

  const renderTabsBar = (props) => (
    <TabBar 
      {...props}
      tabStyle={styles.tabStyle} // Corrected style property name
      indicatorStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.blue}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => 
        <Text style={{ color, ...styles.text }}>{route.title}</Text>}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }} // Corrected width
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({ // Imported StyleSheet
  tabStyle: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 13, 
    fontWeight: "bold",
  }
});
