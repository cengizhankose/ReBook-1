import React from 'react';
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import {styles} from './styles';
const placeholder =
  'https://firebasestorage.googleapis.com/v0/b/rebook-6d8b6.appspot.com/o/mock%2Fsuc.png?alt=media&token=8e84d044-e810-47ea-81f1-a3619015b3b6';
const mockData = [
  {
    bookName: 'Suç ve Ceza',
    img: placeholder,
  },
  {
    bookName: 'Suç ve Ceza 2 ',
    img: placeholder,
  },
  {
    bookName: 'Suç ve Ceza 3',
    img: placeholder,
  },
  {
    bookName: 'Suç ve Ceza 4',
    img: placeholder,
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
            mockData.map((item) => (
              <View
                key={Math.random() + item.bookName}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'space-around',
                }}>
                <ImageBackground
                  style={{width: 150, height: 150, marginHorizontal: 10}}
                  source={{uri: item.img}}>
                  <Text style={{margin: 5, textAlign: 'center', fontSize: 14}}>
                    {item.bookName}
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
