import {ADD_BOOK, ADD_BOOK_FAILD, ADD_BOOK_SUCCESS} from './types';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {set} from 'react-native-reanimated';

export const addBook = (params) => {
  console.log('gelen params', params);
  return (dispatch) => {
    dispatch({type: ADD_BOOK});

    firestore()
      .collection('Products')
      .add(params)
      .then((data) => {
		console.log('Geldi', data._documentPath._parts[1]);
		
      });

    // firestore()
    //   .collection('Users')
    //   .doc(params.uid)
    //   .get()
    //   .then((user) => {
    //     console.log('addbokk gelen user', user._data);
    //   });
  };
};
