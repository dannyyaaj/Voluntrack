import { call, put, takeLatest } from 'redux-saga/effects';
import { VOLUNTEER_ACTIONS } from '../actions/volunteerActions';
import { callAllVolunteers } from '../requests/volunteerRequests';

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

// function* fetchUpcomingEvents() {

//   try {
//     const event = yield callUpcomingEvent();
//     // Send query results to redux
//     yield put({
//       type: EVENT_ACTIONS.SET_UPCOMING_EVENT,
//       payload: event,
//     });
//   } catch (error) {
//     yield put({
//       type: EVENT_ACTIONS.EVENT_DATA_FETCH_FAILED,
//       message: error.data || "FORBIDDEN",
//     })
//   }
// }

// // Get past events
// function* fetchPastEvents() {
//   try {
//     const event = yield callPastEvent();
//     yield put({
//       type: EVENT_ACTIONS.SET_PAST_EVENT,
//       payload: event,
//     });
//   } catch (error) {
//     yield put({
//       type: EVENT_ACTIONS.EVENT_DATA_FETCH_FAILED,
//       message: error.data || "FORBIDDEN",
//     })
//   }
// }

// // Post new event to database
// function* addEventData(newEvent) {
//   try {
//     yield call(addEvent(newEvent));
//     // dispatch get upcoming events
//     yield put({
//       type: EVENT_ACTIONS.FETCH_UPCOMING_EVENTS
//     });
//     yield put({
//       type: EVENT_ACTIONS.FETCH_PAST_EVENTS
//     });
//   } catch (error) {
//     yield put({
//       type: EVENT_ACTIONS.EVENT_DATA_FETCH_FAILED,
//       message: error.data || "FORBIDDEN",
//     })
//   }
// }

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

  // yield takeLatest(EVENT_ACTIONS.FETCH_UPCOMING_EVENTS, fetchUpcomingEvents);
  // yield takeLatest(EVENT_ACTIONS.FETCH_PAST_EVENTS, fetchPastEvents);
  // yield takeLatest(EVENT_ACTIONS.PUT_EVENT_DATA, putEventData);
  // yield takeLatest(EVENT_ACTIONS.POST_EVENT, addEventData)
  // yield takeLatest(EVENT_ACTIONS.DELETE_EVENT, deleteEventData)
}

export default volunteerSaga;