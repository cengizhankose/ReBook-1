import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './styles';
const mockData = [
  {
    bookName: 'Suç ve Ceza',
    img: 'https://via.placeholder.com/300',
  },
  {
    bookName: 'Suç ve Ceza',
    img: 'https://via.placeholder.com/300',
  },
  {
    bookName: 'Suç ve Ceza',
    img: 'https://via.placeholder.com/300',
  },
];
const index = () => {
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
          {
            // Bu kısımda yeni eklenenler kitaplar listesinde kitap cardları listelenecek

            mockData.map((book) => (
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 300, height: 300}}
                  source={{uri: book.img}}
                />
                <Text>{book.bookName}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
