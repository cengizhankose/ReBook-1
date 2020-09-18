import {
  ADD_FAVORI,
  ADD_FAVORI_FAILD,
  ADD_FAVORI_SUCCESS,
  GET_FAVORI,
  GET_FAVORI_FAILD,
  GET_FAVORI_SUCCESS,
  REMOVE_FAVORI,
  REMOVE_FAVORI_FAILD,
  REMOVE_FAVORI_SUCCESS,
} from './types';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';
import {showMessage} from 'react-native-flash-message';

export const add_to_favorite = (params) => {
  const {author, content, image, price, title, id} = params.favoriBook;
  const favoriItem = {
    author,
    content,
    image,
    price,
    title,
    id,
  };
  return (dispatch) => {
    dispatch({type: ADD_FAVORI});
    firestore()
      .collection('Users')
      .doc(params.uid)
      .update({
        favorites: firestore.FieldValue.arrayUnion(favoriItem),
      })
      .then((res) => {
        dispatch({type: ADD_FAVORI_SUCCESS, payload: favoriItem});
        showMessage({
          message: 'Ürün Favorilere Eklendi',
          type: 'success',
        });
      })
      .catch((error) => {
        Alert.alert(
          'Hata',
          `Favorilere eklenme sırasında hata oluştu. \nHata:${error.message}`,
        );
        dispatch({type: ADD_FAVORI_FAILD});
      });
  };
};

export const removeFromFavori = (params) => {
  const {author, content, image, price, title, id} = params.favoriBook;
  const favoriItem = {
    author,
    content,
    image,
    price,
    title,
    id,
  };
  return (dispatch) => {
    dispatch({type: REMOVE_FAVORI});
    firestore()
      .collection('Users')
      .doc(params.uid)
      .update({
        favorites: firestore.FieldValue.arrayRemove(favoriItem),
      })
      .then((res) => {
        dispatch({type: REMOVE_FAVORI_SUCCESS, payload: id});
        showMessage({
          message: 'Favorilerden çıkarıldı',
          type: 'warning',
        });
      })
      .catch((error) => {
        Alert.alert(
          'Hata',
          `Favorilere eklenme sırasında hata oluştu. \nHata:${error.message}`,
        );
        dispatch({type: REMOVE_FAVORI_FAILD});
      });
  };
};

export const getFavoriteBooks = (incomingUid) => {
  return async (dispatch) => {
    dispatch({type: GET_FAVORI});
    try {
      await firestore()
        .collection('Users')
        .doc(incomingUid)
        .get()
        .then((res) => {
          let userBooks = [];
          res._data.favorites.forEach((book) => userBooks.push(book));
          dispatch({type: GET_FAVORI_SUCCESS, payload: userBooks});
        });
    } catch (err) {
      dispatch({type: GET_FAVORI_FAILD});
    }
  };
};
