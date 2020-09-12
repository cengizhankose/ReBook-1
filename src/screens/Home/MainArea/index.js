import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import CardItem from '../../../components/CardItem/';
import {getBook} from '../../../redux/addBook/actions';
const placeHolder = 'https://reactjs.org/logo-og.png';

const mockData = [
  {
    bookName: 'Steve Jobs 2',
    img: [
      'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
      'https://jameskennedymonash.files.wordpress.com/2011/11/dsc_0019.jpg',
    ],
    author: 'Walter Isaacson',
    bookPrice: 30,
    bookText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis justo quis egestas porta. Duis mollis augue eget eleifend blandit. Sed et pulvinar nisi. Donec vulputate ex nec mauris consequat facilisis. Maecenas odio odio, facilisis placerat imperdiet eu, tempus non lorem. Praesent bibendum leo erat, a lacinia ligula venenatis in. Suspendisse eleifend felis sit amet ante porttitor, vitae condimentum justo molestie.',
    seller: 'Oktay İbiş',
    location: 'İstanbul',
  },
];
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
          {props.books &&
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
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
const mapFromStateToProps = ({auth, addBook}) => {
  const {user} = auth;
  const {books} = addBook;
  return {user, books};
};
export default connect(mapFromStateToProps, {getBook})(Index);
