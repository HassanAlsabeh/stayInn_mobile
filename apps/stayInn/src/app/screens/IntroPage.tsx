import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { useThemeColors } from '../hooks/useThemeColors';
import { useCustomTheme } from '../context/Theme';
import Video from 'react-native-video';
import { Text } from '../components/themed';
import StayInn from '../assets/svg/Stayinn intro elements.svg';
import Carousel from 'react-native-reanimated-carousel';
import { Borders } from '../theme/Borders';
const BackgroundImage = require('../assets/images/intro_BGG.png');

const SnapIndicator = ({ currentIndex, itemCount }) => {
  const { colors } = useThemeColors();
  return (
    <View style={styles.containerCarousel}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              width: 8,
              height: 8,
              backgroundColor:
                index === currentIndex ? colors.primary : `${colors.primary}70`,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default function IntroPage() {
  const { colors } = useThemeColors();
  const { theme, setTheme } = useCustomTheme();
  const { height, width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={{
          height: height,
          width: width,
        }}
      >
        <View style={styles.logo}>
          <Image source={require('../assets/images/stayInnLogo.png')} />
        </View>
        <View style={styles.starsAnimation}>
          <StayInn />
        </View>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            mode="parallax"
            width={width}
            height={width / 2}
            autoPlay={false}
            pagingEnabled={true}
            snapEnabled={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setCurrentIndex(index)}
            renderItem={({ index }) => (
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  justifyContent: 'center',
                  borderRadius: Borders.border_14,
                  width: 200,
                  height: 200,
                }}
              ></View>
            )}
          />
          <SnapIndicator currentIndex={currentIndex} itemCount={6} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginTop: '30%',
  },
  starsAnimation: {
    position: 'absolute',
    width: '100%',
  },
  carouselContainer: {
    marginTop: '15%',
    alignItems: 'center',
    position: 'relative',
    height: 250,
  },
  containerCarousel: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  dot: {
    borderRadius: 20,
    marginHorizontal: 2,
    marginVertical: 10,
  },
});
