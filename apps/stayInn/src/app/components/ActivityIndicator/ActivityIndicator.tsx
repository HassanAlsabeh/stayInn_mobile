import React from 'react';
import { View } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';
import { useThemeColors } from '../../hooks/useThemeColors';
export default function ActivityIndicatorComponent({ zindex, home }) {
  const { colors } = useThemeColors();

  return (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingTop: 100,
        backgroundColor: home ? 'black' : 'transparent',
        opacity: 0.5,
        height: '100%',
        width: '100%',
        zIndex: zindex ? 0 : 1000,
      }}
    >
      <ActivityIndicator size={50} color={colors.primary} />
    </View>
  );
}
