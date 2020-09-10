import {
  CHANGE_USER_STATUS,
  REGİSTER_USER,
  REGİSTER_USER_SUCCESS,
  REGİSTER_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
} from './types';
import {registerUser} from '../../../firebaseHelper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const changeUserStatus = (status) => {
  return (dispatch) => {
    dispatch({type: CHANGE_USER_STATUS, payload: status});
  };
};

export const registerUserAction = (params) => {
  console.log('register params', params);
  return (dispatch) => {
    if (
      params.email != '' &&
      params.password != '' &&
      params.name != '' &&
      params.username != ''
    ) {
      if (validateEmail(params.email)) {
        dispatch({type: REGİSTER_USER});

        auth()
          .createUserWithEmailAndPassword(params.email, params.password)
          .then((data) => {
            const uid = data.user._user.uid;
            const setData = {
              name: params.name,
              username: params.username,
              email: params.email,
              products: [],
              messages: [],
              favorites: [],
            };
            firestore()
              .collection('Users')
              .doc(uid)
              .set(setData)
              .then((res) => {
                console.log('User added!');
              })
              .catch(() => {
                console.log('User Not Add!');
              });
          });
      } else {
        Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!');
      }
    } else {
      Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!');
    }
  };
};

export const loginUserAction = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != '') {
      if (validateEmail(params.email)) {
        dispatch({type: LOGIN_USER});
        auth()
          .signInWithEmailAndPassword(params.email, params.password)
          .then((data) => {
            console.log('signed in!');
            const uid = data.user._user.uid;
            firestore()
              .collection('Users')
              .doc(uid)
              .get()
              .then((user) => {
                console.log('Gelen Data:', user._data);

                dispatch({type: 'userId', payload: uid});
              })
              .catch((err) => console.log(err));
          });
      } else {
        Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!');
      }
    } else {
      Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!');
    }
  };
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
