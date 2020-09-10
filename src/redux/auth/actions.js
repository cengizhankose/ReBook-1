import {
  CHANGE_USER_STATUS,
  REGİSTER_USER,
  REGİSTER_USER_SUCCESS,
  REGİSTER_USER_FAIL,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  USER_LOG_OUT,
} from './types';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const changeUserStatus = (status) => {
  return (dispatch) => {
    dispatch({type: CHANGE_USER_STATUS, payload: status});
  };
};

export const registerUserAction = (params) => {
  return (dispatch) => {
    dispatch({type: REGİSTER_USER});

    auth()
      .createUserWithEmailAndPassword(params.email, params.password)
      .then((res) => {
        dispatch({type: REGİSTER_USER_SUCCESS});
        const uid = res.user._user.uid;
        const setData = {
          name: params.name,
          surname: params.suername,
          email: params.email,
          favorites: [],
          products: [],
        };
        firestore()
          .collection('Users')
          .doc(uid)
          .set(setData)
          .then(() => console.log('added'));
      })
      .catch((err) => {
        dispatch({type: REGİSTER_USER_FAIL});
        Alert.alert('Hata Mesajı', err.message);
      });
  };
};

export const loginUserAction = (email, password) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        let user = getUserAction(res.user.uid);
        dispatch({type: LOGIN_USER_SUCCESS, user});
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: LOGIN_USER_FAIL});
      });
  };
};

export const getUserAction = (userId) => {
  return firestore().collection('Users').doc(userId).get();
};

export const logOutAction = () => {
  return (dispatch) => {
    auth().signOut();
    dispatch({type: USER_LOG_OUT});
  };
};

export const checkUserStatus = () => {
  const user = auth().currentUser;

  return (dispatch) => {
    if (user) {
      const userInfo = getUserAction(user.uid);
      dispatch({type: LOGIN_USER_SUCCESS, user: userInfo});
    }
  };
};
