import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import event from './eventReducer';

const store = combineReducers({
  user,
  login,
  event
});

export default store;
