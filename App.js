import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import GadgetsScreen from './screens/GadgetsScreen'; 
import GadgetDetailScreen from './screens/GadgetDetailScreen'; 
import gadgetsData from './data/gadgets.json'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Gadgets'>
        <Stack.Screen name="Gadgets" options={{ title: 'Gadgets' }}>
          {(props) => <GadgetsScreen {...props} gadgets={gadgetsData} />}
        </Stack.Screen>
        <Stack.Screen name="GadgetDetail" component={GadgetDetailScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
