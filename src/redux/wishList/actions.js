import {
  ADD_FAVORI,
  ADD_FAVORI_FAILD,
  ADD_FAVORI_SUCCESS,
  GET_FAVORI,
  GET_FAVORI_FAILD,
  GET_FAVORI_SUCCESS,
} from './types';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';

export const add_to_favorite = (params) => {
  const {author, content, image, price, title} = params.favoriBook;
  const favoriItem = {
    author,
    content,
    image,
    price,
    title,
    uid: params.uid,
  };
  return (dispatch) => {
    dispatch({type: ADD_FAVORI});

    params.isFavori
      ? firestore()
          .collection('Users')
          .doc(params.uid)
          .update({
            favorites: firestore.FieldValue.arrayUnion(favoriItem),
          })
          .then((res) => {
            Alert.alert('Ürününüz başarıyla favorilere eklendi');
            dispatch({type: ADD_FAVORI_SUCCESS});
          })
          .catch(
            (error) =>
              Alert.alert(
                'Hata',
                `Favorilere eklenme sırasında hata oluştu. \nHata:${error.message}`,
              ),
            dispatch({type: ADD_FAVORI_FAILD}),
          )
      : firestore()
          .collection('Users')
          .doc(params.uid)
          .update({
            favorites: firestore.FieldValue.arrayRemove(favoriItem),
          })
          .then((res) => {
            Alert.alert('Ürünün Favorilerden Çıkarıldı');
            dispatch({type: ADD_FAVORI_SUCCESS});
          })
          .catch(
            (error) =>
              Alert.alert(
                'Hata',
                `Favorilere eklenme sırasında hata oluştu. \nHata:${error.message}`,
              ),
            dispatch({type: ADD_FAVORI_FAILD}),
          );
  };
};

export const getFavoriteBooks = (incomingUid) => {
  return (dispatch) => {
    dispatch({type: GET_FAVORI});
    try {
      firestore()
        .collection('Users')
        .doc(incomingUid)
        .get()
        .then((res) => {
          const userBooks = res._data.favorites;
          dispatch({type: GET_FAVORI_SUCCESS, payload: userBooks});
        });
    } catch (err) {
      dispatch({type: GET_FAVORI_FAILD});
    }
  };
};
