import {
  CHANGE_USER_STATUS,
  REGİSTER_USER,
  REGİSTER_USER_FAIL,
  REGİSTER_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  USER_LOG_OUT,
} from './types';

const INITIAL_STATE = {
  isAuth: false,
  loading: false,
  user: null,
  uid: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_USER_STATUS:
      return {
        ...state,
        isAuth: action.payload,
      };
    case REGİSTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGİSTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.user,
        uid: action.uid,
      };
    case REGİSTER_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.user,
        uid: action.uid,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        isAuth: false,
      };
    case USER_LOG_OUT:
      return {
        ...state,
        user: null,
        isAuth: false,
        uid: null,
      };

    default:
      return state;
  }
};
