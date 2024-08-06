/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import codePush from 'react-native-code-push';
import { fontFamily } from './theme/Fonts';
import { useThemeColors } from './hooks/useThemeColors';
import { ThemeProvider, useCustomTheme } from './context/Theme';
import RootNavigation from './navigations/RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, zIndex: 99999 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default codePush(App);
