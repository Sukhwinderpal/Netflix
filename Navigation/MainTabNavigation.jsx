
import React from 'react';
import HomeStack from './HomeStack';

import SearchStack from './SearchStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const MainTab = () => {
    
const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator

      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor:'white',
        headerShown:false,
        tabBarStyle:{
          backgroundColor:'#222'
        },
      
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
         
          tabBarIcon: ({ focused }) => (
            <AntDesign name="home" color={focused?'red':'white'} size={24} />
          ),
         
        }}
      />
       <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused}) => (
            <MaterialCommunityIcons name="magnify" color={focused?'red':'white'} size={24} />
          ),
        }}
      />
       
     
     
    </Tab.Navigator>
  )
}

export default MainTab



