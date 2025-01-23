import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../src/Screens/HomeScreen';
import DetailsScreen from '../src/Screens/DetailsScreen';

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailsScreen} />

    </Stack.Navigator>
  )
}

export default HomeStack