import React from 'react';
import { View } from 'react-native';
export default function Divider({ color }) {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: 1,
        width: '100%',
      }}
    />
  );
}
