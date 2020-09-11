import React from 'react';
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
import {useNavigation} from '@react-navigation/core';

// Sabit değişkenler
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
        const uid = res.user._user.uid;
        const setData = {
          name: params.name,
          username: params.username,
          email: params.email,
          profile_img: params.profile_img
            ? params.profile_img
            : 'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
          favorites: [],
          products: [],
        };
        firestore()
          .collection('Users')
          .doc(uid)
          .set(setData)
          .then((res) => {
            dispatch({type: REGİSTER_USER_SUCCESS, user: setData, uid});
          });
      })
      .catch((err) => {
        dispatch({type: REGİSTER_USER_FAIL});
        Alert.alert(
          'Kayıt Başarısız',
          `Üyelik oluşturma sırasında hatası oluştu. \nHata kodu: ${err.message}`,
        );
      });
  };
};

export const loginUserAction = (email, password) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const user = await getUserAction(res.user.uid);
        dispatch({type: LOGIN_USER_SUCCESS, user: user.data()});
      })
      .catch((err) => {
        Alert.alert(
          'Giriş Başarısız',
          `Giriş yapılırken hata oluştu. \nHata kodu: ${err.message}`,
        );
        dispatch({type: LOGIN_USER_FAIL});
      });
  };
};

export const getUserAction = async (userId) => {
  console.log('userid', userId);
  let userInfo = await firestore().collection('Users').doc(userId).get();
  return userInfo;
};

export const logOutAction = () => {
  return (dispatch) => {
    auth()
      .signOut()
      .then((res) => {
        dispatch({type: USER_LOG_OUT});
      })
      .catch((error) =>
        Alert.alert(
          'Çıkış Başarısız',
          `Çıkış yapılırken hata oluştu. \nHata kodu: ${error.message}`,
        ),
      );
  };
};

export const checkUserStatus = () => {
  const user = auth().currentUser;
  console.log('users', user);
  return async (dispatch) => {
    if (user) {
      console.log('check:', user.uid);
      const userInfo = await getUserAction(user.uid);
      console.log('userinfo-----', userInfo.data());
      dispatch({
        type: LOGIN_USER_SUCCESS,
        user: userInfo.data(),
        uid: user.uid,
      });
    } else {
      dispatch({type: LOGIN_USER_FAIL});
    }
  };
};

export const changePassword = async (newPassword, navigation) => {
  const user = auth().currentUser;

  await user.updatePassword(newPassword).catch((err) => {
    Alert.alert(
      'Şifre Hatası',
      `Şifre değişikliğinde hata oluştu. \nHata kodu: ${err.message}`,
    );
  });
  Alert.alert('Başarılı', 'Şifreniz değişti.', [
    {
      text: 'Tamam',
      onPress: navigation,
    },
  ]);
};
