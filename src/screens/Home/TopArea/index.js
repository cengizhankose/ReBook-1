import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './styles';
import CardItemMini from '../../../components/CardItemMini';
import axios from 'axios';

const Index = () => {
  const [popiBook, setPopiBook] = useState([]);
  const [bookDowload, setBookDownload] = useState(false);

  useEffect(() => {
    const popularBooks = async () => {
      let allBooks = [];
      setBookDownload(true);
      await axios
        .get(
          'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=oGsKUARnGzfSGCzD8Yh4bWPtfoMjAVSR',
        )
        .then((res) => {
          res.data.results.books
            .map(async (item) => {
              //console.log(item.title);
              const newObj = {
                title: item.title,
                author: item.author,
                image: item.book_image,
                location: 'İstanbul',
                content: item.description,
                price: 30,
              };

              await populerBooks.push(newObj);
            })
            .then((result) => setBookDownload(false))
            .catch((err) => {
              setBookDownload(false);
              console.log(err);
            });
          //console.log(res.data.results);
        });
      setPopiBook(allBooks);
    };
    //popularBooks();
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
          {popiBook.map((book) => (
            <CardItemMini
              key={book.title + Math.random()}
              book={book}
              marginTop={0.1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
