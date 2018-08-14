import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import userData from './userDataReducer';

const store = combineReducers({
  user,
  login,
  userData
});

export default store;
