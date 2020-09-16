import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './styles';
import CardItemMini from '../../../components/CardItemMini';
import axios from 'axios';
import {Spinner} from 'native-base';
import {Colors} from '../../../constant/colors/colors';

const Index = () => {
  const [popiBook, setPopiBook] = useState([]);
  const [bookDowload, setBookDownload] = useState(true);

  useEffect(() => {
    const popularBooks = async () => {
      //let allBooks = [];
      setBookDownload(true);
      axios
        .get(
          'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=oGsKUARnGzfSGCzD8Yh4bWPtfoMjAVSR',
        )
        .then((res) => {
          let allBooks = res.data.results.books.map((item) => {
            console.log(item);
            const newObj = {
              title: item.title,
              author: item.author,
              image: item.book_image,
              location: 'NY Times',
              content: item.description,
              price: 30,
              link: item.buy_links[1].url,
            };

            return newObj;
          });

          setPopiBook(allBooks);
          setBookDownload(false);
          //console.log(res.data.results);
        })
        .catch((err) => {
          setBookDownload(false);
          console.log(err);
        });
    };
    popularBooks();
  }, []);
  //console.log('popiiii', popiBook);
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
          {!bookDowload ? (
            popiBook.map((book) => (
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
