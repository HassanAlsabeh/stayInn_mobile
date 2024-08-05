import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { useCustomTheme } from '../context/Theme';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Video from 'react-native-video';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import { horizontalAnimation } from './animation';
import IntroPage from '../screens/IntroPage';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function RootNavigation() {
  const { colors } = useThemeColors();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: 'transparent',
    },
  };
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={horizontalAnimation}
        />
        <Stack.Screen
          name="IntroPage"
          component={IntroPage}
          options={horizontalAnimation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
