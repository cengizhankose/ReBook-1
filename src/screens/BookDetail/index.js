import React, {useEffect} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import BookCarousel from './BookCarousel';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {getUser} from '../../redux/auth/actions';
const Index = () => {
  const route = useRoute();
  const {book} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    // Kitabı satan user bilgileri çekilecek
    //dispatch(getUser(book.sellerId));
  }, [dispatch]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.imgContainer}>
        <BookCarousel data={[]} />
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
          <Text style={styles.sellerText}>Satıcı: {book.author}</Text>
        </View>
      </View>
      <ScrollView persistentScrollbar scrollEnabled style={styles.content}>
        <Text>{book.title}</Text>
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
