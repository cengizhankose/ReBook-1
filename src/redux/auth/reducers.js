import {CHANGE_USER_STATUS} from './types';

const INITIAL_STATE = {
  isAuth: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_USER_STATUS:
      return {
        ...state,
        isAuth: action.payload,
      };

    default:
      return state;
  }
};
