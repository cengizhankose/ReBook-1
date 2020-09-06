import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './styles';

const mockData = [
  {
    bookName: 'Suç ve Ceza',
    img: 'https://via.placeholder.com/150',
  },
  {
    bookName: 'Suç ve Ceza 2 ',
    img: 'https://via.placeholder.com/150',
  },
  {
    bookName: 'Suç ve Ceza 3',
    img: 'https://via.placeholder.com/150',
  },
  {
    bookName: 'Suç ve Ceza 4',
    img: 'https://via.placeholder.com/150',
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
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'space-around',
                }}>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: item.img}}
                />
                <Text style={{margin: 5}}>{item.bookName}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
