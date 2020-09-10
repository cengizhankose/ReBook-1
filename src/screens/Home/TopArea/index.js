import React from 'react';
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import {styles} from './styles';
import CardItemMini from '../../../components/CardItemMini';
const mockData = [
  {
    bookName: 'Steve Jobs 2',
    img: [
      'https://images-na.ssl-images-amazon.com/images/I/514CVwOrybL._SX333_BO1,204,203,200_.jpg',
      'https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg',
    ],
    author: 'Walter Isaacson',
    bookPrice: 30,
    bookText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis justo quis egestas porta. Duis mollis augue eget eleifend blandit. Sed et pulvinar nisi. Donec vulputate ex nec mauris consequat facilisis. Maecenas odio odio, facilisis placerat imperdiet eu, tempus non lorem. Praesent bibendum leo erat, a lacinia ligula venenatis in. Suspendisse eleifend felis sit amet ante porttitor, vitae condimentum justo molestie.',
    seller: 'Oktay İbiş',
    location: 'İstanbul',
  },
];
const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}>
          <Text style={[styles.fontOrange, styles.textStyle]}>Po</Text>püler
          <Text style={[styles.fontPink, styles.textStyle]}> Ki</Text>taplar
        </Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView horizontal>
          {
            // TODO: Buraya fetch edilen kitap listesi arrayı her biri bookcard olacak şekilde yazdırırılacak.!
            mockData.map((book) => (
              <CardItemMini
                book={book}
                key={book.bookName + Math.random()}
                bookAuthor={book.author}
                bookName={book.bookName}
                bookLocation={book.location}
                bookPrice={book.bookPrice}
                img={Array.isArray(book.img) ? book.img[0] : book.img}
              />
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
