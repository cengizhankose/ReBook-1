import {combineReducers} from 'redux';

import AuthReducers from './auth/reducers';
import UserId from './auth/reducers';

export default combineReducers({
  auth: AuthReducers,
  UserId: UserId,
});
