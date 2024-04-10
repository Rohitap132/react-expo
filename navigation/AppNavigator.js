import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GadgetDetailScreen from '../screens/GadgetDetailScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GadgetDetail" component={GadgetDetailScreen} />
    </Stack.Navigator>
  );
}
