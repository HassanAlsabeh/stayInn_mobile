import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { useCustomTheme } from '../context/Theme';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  IntroPage: undefined;
  MainScreen: undefined;

  // add other screens here
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'IntroPage'>;

export default function LandingPage() {
  const { colors } = useThemeColors();
  const { theme, setTheme } = useCustomTheme();
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {}, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/videos/splashVideo.mp4')} // Update the path to your video file
        style={styles.video}
        resizeMode="cover"
        onEnd={() => navigation.navigate('IntroPage')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
