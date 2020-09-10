import {ADD_BOOK, ADD_BOOK_FAILD, ADD_BOOK_SUCCESS} from './types';
import firestore from '@react-native-firebase/firestore';
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
      });
  };
};
