import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import CardItem from '../../../components/CardItem/';

const mockData = [
  {
    bookName: 'Steve Jobs 2',
    img: [
      'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
      'https://jameskennedymonash.files.wordpress.com/2011/11/dsc_0019.jpg',
    ],
    author: 'Walter Isaacson',
    bookPrice: 30,
    bookText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis justo quis egestas porta. Duis mollis augue eget eleifend blandit. Sed et pulvinar nisi. Donec vulputate ex nec mauris consequat facilisis. Maecenas odio odio, facilisis placerat imperdiet eu, tempus non lorem. Praesent bibendum leo erat, a lacinia ligula venenatis in. Suspendisse eleifend felis sit amet ante porttitor, vitae condimentum justo molestie.',
    seller: 'Oktay İbiş',
    location: 'İstanbul',
  },
];
const Index = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}>
          <Text style={styles.fontOrange}>Ye</Text>ni{' '}
          <Text style={styles.fontOrange}>Ek</Text>lenen{' '}
          <Text style={styles.fontPink}>Ki</Text>taplar
        </Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView horizontal>
          {mockData.map((book) => (
            <CardItem
              book={book}
              key={book.bookName + Math.random()}
              img={Array.isArray(book.img) ? book.img[0] : book.img}
              bookAuthor={book.author}
              bookLocation={book.location}
              bookPrice={book.bookPrice}
              bookName={book.bookName}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
