import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {styles} from './styles';

const BookCarousel = ({data}) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const {width, height} = useWindowDimensions();

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

  const _renderItem = ({item, index}) => {
    console.log('item', item);
    return <Image style={styles.img} source={{uri: item}} />;
  };
  return (
    <View>
      <Carousel
        autoplay
        data={data}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {pagination()}
    </View>
  );
};

export default BookCarousel;
