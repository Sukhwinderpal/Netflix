import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '../src/Screens/SearchScreen';
import DetailsScreen from '../src/Screens/DetailsScreen';

const SearchStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default SearchStack