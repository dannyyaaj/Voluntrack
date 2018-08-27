import { combineReducers } from 'redux';
import { VOLUNTEER_ACTIONS } from '../actions/volunteerActions';


// Dispatch action type to get all volunteers
const allVolunteers = (state = null, action) => {
  switch (action.type) {
    case VOLUNTEER_ACTIONS.SET_ALL_VOLUNTEERS:
      return action.payload || state;
    default:
      return state;
  }
}

// Dispatch action type to get all volunteers with no event assigned yet
const inviteVolunteers = (state = null, action) => {
  switch (action.type) {
    case VOLUNTEER_ACTIONS.SET_NON_EVENT_VOLUNTEERS:
      return action.payload || state;
    default:
      return state;
  }
}

// const eventVolunteers = (state = null, action) => {
//   switch (action.type) {
//     case EVENT_ACTIONS.SET_PAST_EVENT:
//       return action.payload || state;
//     default:
//       return state;
//   }
// }

export default combineReducers({
 allVolunteers,
 inviteVolunteers
});