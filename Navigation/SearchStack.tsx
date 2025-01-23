import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '../src/Screens/SearchScreen';

const SearchStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default SearchStack