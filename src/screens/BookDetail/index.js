import React, {useEffect} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import BookCarousel from './BookCarousel';
import Button from '../../components/Button';
import {useDispatch, connect} from 'react-redux';
import {getUserAction} from '../../redux/auth/actions';
const Index = (props) => {
  const [sellerUser, setsellerUser] = React.useState({});
  const [isMyBook, setIsMyBook] = React.useState(false);
  const route = useRoute();
  const {book} = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const user = await getUserAction(book.seller_id);
      setsellerUser(user);
    };

    fetch();
    if (props.uid === book.seller_id) {
      setIsMyBook(true);
    }
  }, []);

  console.log('uid', props.uid);
  return (
    <View style={styles.pageContainer}>
      <View style={styles.imgContainer}>
        <BookCarousel data={book.image ? book.image : null} />
      </View>
      <View style={styles.pageHeader}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{book.title}</Text>
          <Text style={styles.priceText}>
            {book.price}
            <Text style={{color: 'black'}}> ₺</Text>
          </Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.sellerText}>
            Satıcı: {sellerUser && sellerUser.name}
          </Text>
        </View>
      </View>
      <ScrollView persistentScrollbar scrollEnabled style={styles.pageContent}>
        <Text>{book.content}</Text>
      </ScrollView>
      <View style={styles.pageFooter}>
        <View style={styles.btnContainer}>
          <Button
            onPress={() =>
              isMyBook
                ? props.navigation.navigate('BookEdit', book)
                : Alert.alert('mesaj yolla sayfası')
            }
            text={isMyBook ? 'Kitabı düzenle' : 'Satıcıya yaz'}
          />
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = ({auth}) => {
  let {uid} = auth;
  return {uid};
};
export default connect(mapStateToProps, null)(Index);
