import { combineReducers } from 'redux';
import { EVENT_ACTIONS } from '../actions/eventActions';


// Dispatch types for upcoming events
const upcoming = (state = null, action) => {
  switch (action.type) {
    case EVENT_ACTIONS.SET_UPCOMING_EVENT:
      return action.payload || state;
    default:
      return state;
  }
}

// Dispatch type for past events 
const past = (state = null, action) => {
  switch (action.type) {
    case EVENT_ACTIONS.SET_PAST_EVENT:
      return action.payload || state;
    default:
      return state;
  }
}

export default combineReducers({
  upcoming,
  past
});