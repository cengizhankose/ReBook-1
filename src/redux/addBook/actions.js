import {ADD_BOOK, ADD_BOOK_FAILD, ADD_BOOK_SUCCESS} from './types';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';

export const addBook = (params) => {
  console.log('gelen params', params);
  return (dispatch) => {
    dispatch({type: ADD_BOOK});

    firestore()
      .collection('Products')
      .add(params)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        const reference = storage().ref(`/products/${res.id + Math.random()}`);
        console.log('in action image:', params.image);
        params.image.map((imageUri) => {
          reference.putFile(imageUri).then(() => {
            reference.getDownloadURL().then((imageURL) => {
              firestore()
                .collection('Products')
                .doc(res.id)
                .update({image: firestore.FieldValue.arrayUnion(imageURL)})
                .then(() => {
                  //dispatch({type:ADD_BOOK_SUCCESS, book: })
                  console.log('başarılı');
                  Alert.alert('Başarılı', 'Kitabınız Başarıyla Eklendi');
                  dispatch({
                    type: ADD_BOOK_SUCCESS,
                    book: {...params, image: imageURL},
                  });
                  //RootNavigation.pop()
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
