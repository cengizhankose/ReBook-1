import React from 'react';
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import {styles} from './styles';
import CardItemMini from '../../../components/CardItemMini';
const mockData = [
  {
    title: 'Steve Jobs 2',
    image: [
      'https://images-na.ssl-images-amazon.com/images/I/514CVwOrybL._SX333_BO1,204,203,200_.jpg',
      'https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg',
    ],
    author: 'Walter Isaacson',
    price: 30,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis justo quis egestas porta. Duis mollis augue eget eleifend blandit. Sed et pulvinar nisi. Donec vulputate ex nec mauris consequat facilisis. Maecenas odio odio, facilisis placerat imperdiet eu, tempus non lorem. Praesent bibendum leo erat, a lacinia ligula venenatis in. Suspendisse eleifend felis sit amet ante porttitor, vitae condimentum justo molestie.',
    seller_id: 'Oktay İbiş',
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
              <CardItemMini key={book.id} book={book} />
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
