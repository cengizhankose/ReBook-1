import {
  ADD_BOOK,
  ADD_BOOK_FAILD,
  ADD_BOOK_SUCCESS,
  ADD_ONE_BOOK,
  GET_BOOK,
  GET_BOOK_FAILD,
  GET_BOOK_SUCCESS,
} from './types';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';

export const addBookAction = (params, images, callback) => {
  let counter = 0; // Birden fazla resim yüklemenmesi durumunda kaçıncı resmin yüklendiğini takip edecek
  return (dispatch) => {
    dispatch({type: ADD_BOOK});

    firestore()
      .collection('Products') // firebase de products collection altına ekliyoruz. sonrasında resimleri upload edeceğiz.
      .add(params)
      .catch((err) => {
        Alert.alert('Hata', 'Tekrar deneyiniz.\nHata Kodu:' + err.message);
      })
      .then((res) => {
        // localda yüklediğimiz resimlerin local pathlarını topladığım dizini loop içerisine alıp her resmi upload ediyoruz.
        images.map((imageUri) => {
          const reference = storage().ref(
            `/products/${res.id + Math.random()}`,
          );
          reference.putFile(imageUri).then(() => {
            reference.getDownloadURL().then((imageURL) => {
              // Resim yüklendikten sonra yüklendiği url alıp, product içerisindeki objemize ekliyoruz.
              firestore()
                .collection('Products')
                .doc(res.id)
                .update({image: firestore.FieldValue.arrayUnion(imageURL)})
                .then(() => {
                  dispatch({type: ADD_ONE_BOOK, book: imageURL});
                  counter++;
                  if (counter === images.length) {
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

export const getBook = () => {
  let allBooks = [];
  return (dispatch) => {
    dispatch({type: GET_BOOK});

    try {
      firestore()
        .collection('Products')
        .onSnapshot((books) => {
          books.forEach((book) => {
            let data = book.data();
            let id = book.id;
            let dataWithID = {
              ...data,
              id,
            };

            allBooks.push(dataWithID);
          });
          dispatch({type: GET_BOOK_SUCCESS, payload: allBooks});
        });
    } catch (error) {
      dispatch({type: GET_BOOK_FAILD});
      Alert.alert('Hata', `Hata Alındı. \nHata Kodu: ${error.message}`);
    }
  };
};
