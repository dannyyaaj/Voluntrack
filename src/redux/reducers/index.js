import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import event from './eventReducer';
import volunteer from './volunteerReducer'

const store = combineReducers({
  user,
  login,
  event,
  volunteer
});

export default store;
