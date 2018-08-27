import { put, takeLatest } from 'redux-saga/effects';
import { VOLUNTEER_ACTIONS } from '../actions/volunteerActions';
import { callAllVolunteers, callVolunteersToInvite, inviteToEvent } from '../requests/volunteerRequests';

// Get all volunteers
function* fetchAllVolunteers() {
  try {
    const volunteers = yield callAllVolunteers();
    yield put({
      type: VOLUNTEER_ACTIONS.SET_ALL_VOLUNTEERS,
      payload: volunteers
    });
  } catch (error) {
    yield put({
      type: VOLUNTEER_ACTIONS.VOLUNTEER_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    })
  }
}

function* fetchNonEventVolunteers() {
  try {
    const nonEventVolunteers = yield callVolunteersToInvite();
    yield put({
      type: VOLUNTEER_ACTIONS.SET_NON_EVENT_VOLUNTEERS,
      payload: nonEventVolunteers
    });
  } catch (error) {
    yield put({
      type: VOLUNTEER_ACTIONS.VOLUNTEER_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    })
  }
}

// Add volunteer to event
function* addVolunteerToEvent(EventAndVolunteerToAdd) {
  try {
    yield inviteToEvent(EventAndVolunteerToAdd);
    // dispatch invite volunteer to event
    yield put({
      type: VOLUNTEER_ACTIONS.FETCH_NON_EVENT_VOLUNTEERS
    });
    yield put({
      type: VOLUNTEER_ACTIONS.FETCH_ALL_VOLUNTEERS
    });
  } catch (error) {
    yield put({
      type: VOLUNTEER_ACTIONS.VOLUNTEER_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    })
  }
}

// function* putEventData(action) {
//   try {
//     yield updateEventData(action.payload);
//     yield put({
//       type: EVENT_ACTIONS.FETCH_UPCOMING_EVENTS
//     });
//     yield put({
//       type: EVENT_ACTIONS.FETCH_PAST_EVENTS
//     });
//   } catch (error) {
//     console.log('LOGOUT FAILED -- CHECK YOUR SERVER', error);
//   }
// }

// function* deleteEventData(action) {
//   try {
//     yield deleteEvent(action.payload);
//     yield put({
//       type: EVENT_ACTIONS.FETCH_UPCOMING_EVENTS
//     });
//     yield put({
//       type: EVENT_ACTIONS.FETCH_PAST_EVENTS
//     });
//   } catch (error) {
//     console.log('LOGOUT FAILED -- CHECK YOUR SERVER', error);
//   }
// }

function* volunteerSaga() {
  yield takeLatest(VOLUNTEER_ACTIONS.FETCH_ALL_VOLUNTEERS, fetchAllVolunteers);
  yield takeLatest(VOLUNTEER_ACTIONS.FETCH_NON_EVENT_VOLUNTEERS, fetchNonEventVolunteers);
  yield takeLatest(VOLUNTEER_ACTIONS.PUT_VOLUNTEER_TO_EVENT, addVolunteerToEvent)
}

export default volunteerSaga;