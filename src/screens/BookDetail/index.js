import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import BookCarousel from './Carousel';

const Index = () => {
  const route = useRoute();
  const {book} = route.params;
  console.log(route.params.book);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.imgContainer}>
        <BookCarousel data={book.img} />
      </View>
      <View style={styles.pageHeader}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{book.bookName}</Text>
          <Text style={styles.priceText}>{book.bookPrice}</Text>
        </View>
        <Text style={styles.author}>{book.author}</Text>
      </View>
      <View style={styles.pageContent}>
        <Text>{book.bookText}</Text>
      </View>
      <View style={styles.pageFooter}>
        <Text>Add Chart</Text>
      </View>
    </View>
  );
};

export default Index;
