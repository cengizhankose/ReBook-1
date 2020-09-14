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
import storage from '@react-native-firebase/storage';

// Sabit değişkenler
export const changeUserStatus = (status) => {
  return (dispatch) => {
    dispatch({type: CHANGE_USER_STATUS, payload: status});
  };
};

export const registerUserAction = (params) => {
  return async (dispatch) => {
    dispatch({type: REGİSTER_USER});

    await auth()
      .createUserWithEmailAndPassword(params.email, params.password)
      .then((res) => {
        const uid = res.user._user.uid;
        const setData = {
          name: params.name,
          username: params.username,
          email: params.email,
          favorites: [],
          products: [],
          profile_img: null,
        };
        firestore()
          .collection('Users')
          .doc(uid)
          .set(setData)
          .then(() => {
            const ref = storage().ref(
              '/usersProfile/' + `${params.name}_${uid}_${Math.random()}`,
            );
            ref.putFile(params.profileImage).then(() => {
              ref.getDownloadURL().then((imageURL) => {
                console.log('imageurl', imageURL);
                firestore()
                  .collection('Users')
                  .doc(uid)
                  .update({profile_img: imageURL})
                  .then(() => {
                    dispatch({
                      type: REGİSTER_USER_SUCCESS,
                      user: {...setData, profile_img: imageURL},
                      uid,
                    });
                  });
              });
            });
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
        dispatch({type: LOGIN_USER_SUCCESS, user: user});
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
  let userInfo = await firestore().collection('Users').doc(userId).get();
  return userInfo.data();
};

export const logOutAction = () => {
  return async (dispatch) => {
    await auth()
      .signOut()
      .then((res) => {
        dispatch({type: USER_LOG_OUT});
      })
      .catch((error) => {
        Alert.alert(
          'Çıkış Başarısız',
          `Çıkış yapılırken hata oluştu. \nHata kodu: ${error.message}`,
        );
        dispatch({type: USER_LOG_OUT});
      });
  };
};

export const checkUserStatus = () => {
  const user = auth().currentUser;
  return async (dispatch) => {
    if (user) {
      const userInfo = await getUserAction(user.uid);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        user: userInfo,
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
