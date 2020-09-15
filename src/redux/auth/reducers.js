import {
  CHANGE_USER_STATUS,
  REGİSTER_USER,
  REGİSTER_USER_FAIL,
  REGİSTER_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  USER_LOG_OUT,
  USER_CHANGE_PROFILE_IMG,
  USER_CHANGE_SUCCESS,
  USER_CHANGE_FAIL,
} from './types';

const INITIAL_STATE = {
  isAuth: false,
  registerLoading: false,
  loading: false,
  user: null,
  uid: null,
  changeLoading: false,
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
        registerLoading: true,
      };
    case REGİSTER_USER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
        isAuth: true,
        user: action.user,
        uid: action.uid,
      };
    case REGİSTER_USER_FAIL:
      return {
        ...state,
        registerLoading: false,
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
    case USER_CHANGE_PROFILE_IMG:
      return {
        ...state,
        changeLoading: true,
      };
    case USER_CHANGE_SUCCESS:
      const updatedUser =
        action.imageURL !== null
          ? {...state.user, profile_img: action.imageURL}
          : {...state.user};
      return {
        ...state,
        user: updatedUser,
        changeLoading: false,
      };
    case USER_CHANGE_FAIL:
      return {
        ...state,
        changeLoading: false,
      };
    default:
      return state;
  }
};
