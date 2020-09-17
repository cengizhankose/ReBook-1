import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, Image} from 'react-native';
import CardItemMini from '../../../components/CardItemMini';
import {getPopularBooks} from '../../../redux/addBook/actions';
import {styles} from './styles';

import {Spinner} from 'native-base';
import {Colors} from '../../../constant/colors/colors';

const Index = () => {

  const dispatch = useDispatch();
  const {popularBooks, popularBooksLoading} = useSelector(
    (state) => state.addBook,
  );
  useEffect(() => {
    dispatch(getPopularBooks());
  }, []);
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
          {!popularBooksLoading ? (
            popularBooks.map((book) => (
              <CardItemMini
                key={book.title + Math.random()}
                book={book}
                marginTop={0.1}
              />
            ))
          ) : (
            <Spinner shouldRasterizeIOS color={Colors.orange} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
