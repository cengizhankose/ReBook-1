import React, {useEffect} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import BookCarousel from './BookCarousel';
import Button from '../../components/Button';
import {useDispatch, connect} from 'react-redux';
import {getUserAction} from '../../redux/auth/actions';
import {startRoom} from '../../redux/messages/actions';
const Index = (props) => {
  const [sellerUser, setsellerUser] = React.useState({});
  const route = useRoute();
  const {book} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const sendMessage = () => {
    let currentId = props.uid;
    let userObj = {...props.user, ['id']: currentId};

    let path = props.uid + '+' + book.seller_id;
    let item = {
      createDate: new Date(),
      senderUser: userObj,
      recieverUser: {...sellerUser, id: book.seller_id},
      path,
    };
    dispatch(startRoom(path, item));
    navigation.navigate('Messages', {item});
  };
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
      <ScrollView persistentScrollbar scrollEnabled style={styles.pageContent}>
        <Text>{book.content}</Text>
      </ScrollView>
      <View style={styles.pageFooter}>
        <View style={styles.btnContainer}>
          <Button
            onPress={() =>
              props.uid
                ? props.uid === book.seller_id
                  ? navigation.navigate('BookEdit', book)
                  : sendMessage()
                : 'Satıcıya yaz'[
                    Alert.alert(
                      'Lütfen Giriş Yapın.',
                      'Satıcıya Yazmak için giriş yapınız.',
                      [
                        {
                          text: 'Tamam',
                        },
                        {
                          text: 'Giriş Yap',
                          onPress: () => navigation.navigate('Login'),
                        },
                      ],
                    )
                  ]
            }
            text={
              props.uid === book.seller_id ? 'Kitabı düzenle' : 'Satıcıya yaz'
            }
          />
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = ({auth}) => {
  let {uid, user} = auth;
  return {uid, user};
};
export default connect(mapStateToProps, null)(Index);
