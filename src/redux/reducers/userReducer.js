import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions/userActions';
import { USER_DATA_ACTIONS } from '../actions/userDataActions';

const id = (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return action.user.id || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

const userName = (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return action.user.username || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

const data = (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return action.user || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case USER_ACTIONS.REQUEST_START:
      return true;
    case USER_ACTIONS.REQUEST_DONE:
      return false;
    default:
      return state;
  }
};


const profile = (state = null, action) => {
  switch (action.type) {
    case USER_DATA_ACTIONS.SET_USER_DATA:
      return action.payload || state;
    case USER_DATA_ACTIONS.UNSET_USER_DATA:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  id,
  userName,
  isLoading,
  data,
  profile
});
