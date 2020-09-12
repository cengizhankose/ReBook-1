import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import CardItem from '../../../components/CardItem/';
import {getBook} from '../../../redux/addBook/actions';
import {Spinner} from 'native-base';
import {Colors} from '../../../constant/colors/colors';

const placeHolder = 'https://reactjs.org/logo-og.png';

const Index = (props) => {
  const navigation = useNavigation();
  console.log('Books in main', props.books);
  useEffect(() => {
    const fetch = async () => {
      await props.getBook();
    };
    fetch();
  }, []);
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
          {props.bookDownloading ? (
            <Spinner color={Colors.orange} />
          ) : (
            props.books.map((book) => (
              <CardItem
                key={book.title + Math.random()}
                title={book.title}
                author={book.author}
                image={book.image ? book.image[0] : placeHolder}
                price={book.price}
                seller_id={book.seller_id}
                book={book}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};
const mapFromStateToProps = ({auth, addBook}) => {
  const {user} = auth;
  const {books, bookDownloading} = addBook;
  return {user, books, bookDownloading};
};
export default connect(mapFromStateToProps, {getBook})(Index);
