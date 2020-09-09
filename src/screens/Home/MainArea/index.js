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
const placeHolder =
  'https://firebasestorage.googleapis.com/v0/b/rebook-6d8b6.appspot.com/o/mock%2FRectangle%202.png?alt=media&token=087f251f-b579-43ca-820e-22486e091130';
const mockData = [
  {
    bookName: 'Steve Jobs',
    img: [
      'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
      'https://jameskennedymonash.files.wordpress.com/2011/11/dsc_0019.jpg',
    ],
    author: 'Walter Isaacson',
    bookPrice: 30,
    bookText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis justo quis egestas porta. Duis mollis augue eget eleifend blandit. Sed et pulvinar nisi. Donec vulputate ex nec mauris consequat facilisis. Maecenas odio odio, facilisis placerat imperdiet eu, tempus non lorem. Praesent bibendum leo erat, a lacinia ligula venenatis in. Suspendisse eleifend felis sit amet ante porttitor, vitae condimentum justo molestie.',
    seller: 'Oktay İbiş',
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
          {
            // Bu kısımda yeni eklenenler kitaplar listesinde kitap cardları listelenecek

            mockData.map((book) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('BookDetail', {book})}
                style={{flexDirection: 'row'}}
                key={Math.random() + book.bookName}>
                <ImageBackground
                  style={{width: 300, height: 300, marginHorizontal: 10}}
                  source={{
                    uri: Array.isArray(book.img) ? book.img[0] : book.img,
                  }}>
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
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
