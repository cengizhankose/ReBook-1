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

export const changeUserStatus = (status) => {
  return (dispatch) => {
    dispatch({type: CHANGE_USER_STATUS, payload: status});
  };
};

export const registerUserAction = (email, password) => {
  return (dispatch) => {
    dispatch({type: REGİSTER_USER});

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch({type: REGİSTER_USER_SUCCESS});
      })
      .catch((err) => {
        dispatch({type: REGİSTER_USER_FAIL});
      });
  };
};

export const loginUserAction = (email, password) => {
  console.log('geldi', email, password);
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Login edildi', res);
        dispatch({type: LOGIN_USER_SUCCESS});
      })
      .catch((err) => {
        console.log(err);
        dispatch({type: LOGIN_USER_FAIL});
      });
  };
};
