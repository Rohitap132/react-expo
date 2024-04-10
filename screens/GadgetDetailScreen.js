import React from 'react';
import { View, Text } from 'react-native';

export default function GadgetDetailScreen({ route }) {
  const { gadget } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{gadget.name}</Text>
      <Text style={{ fontSize: 16, marginTop: 10 }}>{gadget.description}</Text>
    </View>
  );
}
