import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function GadgetsScreen({ gadgets }) {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
      
    </View>
  );

  return (
    <FlatList
      data={gadgets}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}
