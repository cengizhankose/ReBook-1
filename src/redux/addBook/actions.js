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
        const reference = storage().ref(`/products/${res.id}`);
        console.log('referancer', reference);
        console.log('image uri....', params.image.uri);

        reference.putFile(params.image.uri).then(() => {
          console.log('birinci giriş');
          reference.getDownloadURL().then((imageURL) => {
            console.log('asdurllll', imageURL);

            firestore()
              .collection('Products')
              .doc(res.id)
              .update(params)
              .then((res) => {
                console.log(res);
                //dispatch({ type: ADD_TWEET_SUCCESS, payload: params })
                //RootNavigation.pop()
              });
          });
        });
      });
  };
};
