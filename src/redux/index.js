import {combineReducers} from 'redux';

import AuthReducers from './auth/reducers';
import AddBookReducer from './addBook/reducer';
import Favorites from './wishList/reducer';

export default combineReducers({
  auth: AuthReducers,
  addBook: AddBookReducer,
  Favorites,
});
