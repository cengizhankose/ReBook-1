import React, {useEffect} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import BookCarousel from './BookCarousel';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {getUserAction} from '../../redux/auth/actions';
const Index = () => {
  const [sellerUser, setsellerUser] = React.useState({});
  const route = useRoute();
  const {book} = route.params;
  const dispatch = useDispatch();
  console.log(book);
  console.log('seller user', sellerUser);
  useEffect(() => {
    const fetch = async () => {
      const user = await getUserAction(book.seller_id);
      setsellerUser(user);
    };
    fetch();
  }, []);

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
      <ScrollView persistentScrollbar scrollEnabled style={styles.content}>
        <Text>{book.content}</Text>
      </ScrollView>
      <View style={styles.pageFooter}>
        <View style={styles.btnContainer}>
          <Button
            onPress={() =>
              Alert.alert('Eklendi', `${book.title} listenize eklendi.`)
            }
            text="Satıcıya yaz"
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
