import React, {useState} from 'react';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

const BookCarousel = ({data}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const {width, height} = useWindowDimensions();
  const carouselRef = React.useRef();

  const pagination = () => {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        dotContainerStyle={{height: 10}}
        dotStyle={{
          width: 15,
          height: 10,
          borderRadius: 5,
          marginTop: -30,
          paddingVertical: 5,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          source={{uri: item}}
          {...parallaxProps}
        />
      </View>
    );
  };
  return (
    <View>
      <Carousel
        ref={carouselRef}
        autoplay
        data={data}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
        hasParallaxImages
      />
      {pagination()}
    </View>
  );
};

export default BookCarousel;
