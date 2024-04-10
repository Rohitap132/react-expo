import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import gadgetsData from '../data/gadgets.json';

export default function HomeScreen({ navigation }) {
  const renderGadgetItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('GadgetDetail', { gadget: item })}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={gadgetsData}
      renderItem={renderGadgetItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}
