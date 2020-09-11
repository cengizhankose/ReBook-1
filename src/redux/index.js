import {combineReducers} from 'redux';

import AuthReducers from './auth/reducers';
import AddBookReducer from './addBook/reducer';

export default combineReducers({
  auth: AuthReducers,
  addBook: AddBookReducer,
});
