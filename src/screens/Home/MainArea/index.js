import React from 'react';
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import {styles} from './styles';

const placeHolder =
  'https://firebasestorage.googleapis.com/v0/b/rebook-6d8b6.appspot.com/o/mock%2FRectangle%202.png?alt=media&token=087f251f-b579-43ca-820e-22486e091130';
const mockData = [
  {
    bookName: 'Steve Jobs',
    img: placeHolder,
  },
  {
    bookName: 'Steve Jobs',
    img: placeHolder,
  },
  {
    bookName: 'Steve Jobs',
    img: placeHolder,
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
              <View
                style={{flexDirection: 'row'}}
                key={Math.random() + book.bookName}>
                <ImageBackground
                  style={{width: 300, height: 300, marginHorizontal: 10}}
                  source={{uri: book.img}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginTop: 5,
                    }}>
                    {book.bookName}
                  </Text>
                </ImageBackground>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
