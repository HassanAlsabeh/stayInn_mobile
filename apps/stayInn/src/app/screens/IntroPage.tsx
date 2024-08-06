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
  const photoLinks = [
    'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-furniture-for-your-home-2022-section-1.jpg',
    'https://i.ebayimg.com/images/g/Yw4AAOSw9Shgi9ys/s-l500.jpg',
    'https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232',
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={{
          height: height,
          width: width * 1.1,
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
            data={photoLinks}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setCurrentIndex(index)}
            renderItem={({ index, item }) => (
              <View style={styles.carouselItem}>
                <Image source={{ uri: item }} style={styles.carouselImage} />
              </View>
            )}
          />
          <SnapIndicator
            currentIndex={currentIndex}
            itemCount={photoLinks?.length}
          />
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
  carouselItem: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: Borders.border_14,
    overflow: 'hidden', // Ensures the image doesn't overflow the rounded corners
  },
  carouselImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover', // Ensures the image covers the entire 200x200 area
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
