import {combineReducers} from 'redux';

import AuthReducers from './auth/reducers';

export default combineReducers({
  auth: AuthReducers,
});
