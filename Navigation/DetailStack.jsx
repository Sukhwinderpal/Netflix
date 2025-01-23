import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from '../src/Screens/DetailsScreen';

const DetailStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Detail" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default DetailStack