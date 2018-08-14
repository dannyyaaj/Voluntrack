import { combineReducers } from 'redux';
import { USER_DATA_ACTIONS } from '../actions/userDataActions';

const admin_access = (state = false, action) => {
  switch (action.type) {
    case USER_DATA_ACTIONS.SET_USER_DATA:
      return action.payload || state;
    default:
      return state;
  }
}

export default combineReducers({
  admin_access
})