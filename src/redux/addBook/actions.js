import {
  ADD_BOOK,
  ADD_BOOK_FAILD,
  ADD_BOOK_SUCCESS,
  ADD_ONE_BOOK,
} from './types';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';

export const addBookAction = (params, callback) => {
  let counter = 0;
  return (dispatch) => {
    dispatch({type: ADD_BOOK});

    firestore()
      .collection('Products')
      .add(params)
      .catch((err) => {
        Alert.alert('Hata', 'Tekrar deneyiniz.\nHata Kodu:' + err.message);
      })
      .then((res) => {
        const reference = storage().ref(`/products/${res.id + Math.random()}`);
        params.image.map((imageUri) => {
          reference.putFile(imageUri).then(() => {
            reference.getDownloadURL().then((imageURL) => {
              firestore()
                .collection('Products')
                .doc(res.id)
                .update({image: firestore.FieldValue.arrayUnion(imageURL)})
                .then(() => {
                  dispatch({type: ADD_ONE_BOOK, book: imageURL});
                  counter++;
                  console.log('Kitap eklendi', counter);
                  if (counter === params.image.length) {
                    Alert.alert('Başarılı', 'Kitabınız Başarıyla Eklendi', [
                      {
                        text: 'Tamam',
                        onPress: callback,
                      },
                    ]);
                    dispatch({
                      type: ADD_BOOK_SUCCESS,
                    });
                  }
                })
                .catch(
                  (error) =>
                    Alert.alert(
                      'Hata',
                      `Kitap eklenme sırasında hata oluştu. \nHata:${error.message}`,
                    ),
                  dispatch({type: ADD_BOOK_FAILD}),
                );
            });
          });
        });
      });
  };
};
