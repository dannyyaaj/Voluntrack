import { call, put, takeLatest } from 'redux-saga/effects';
import { EVENT_ACTIONS } from '../actions/eventActions';
import { addEvent, callUpcomingEvent, callPastEvent, updateEventData } from '../requests/eventRequests';

// Get upcoming or past events
function* fetchUpcomingEvents() {

  try {
    const event = yield callUpcomingEvent();
    // Send query results to redux
    yield put({
      type: EVENT_ACTIONS.SET_UPCOMING_EVENT,
      payload: event,
    });
  } catch (error) {
    yield put({
      type: EVENT_ACTIONS.EVENT_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    })
  }
}

// Get past events
function* fetchPastEvents() {
  try {
    const event = yield callPastEvent();
    yield put({
      type: EVENT_ACTIONS.SET_PAST_EVENT,
      payload: event,
    });
  } catch (error) {
    yield put({
      type: EVENT_ACTIONS.EVENT_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    })
  }
}

// Post new event to database
function* addEventData(newEvent) {
  try {
    yield call(addEvent(newEvent));
    // dispatch get upcoming events
    yield put({
      type: EVENT_ACTIONS.FETCH_UPCOMING_EVENTS
    });
  } catch (error) {
    yield put({
      type: EVENT_ACTIONS.EVENT_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    })
  }
}

function* putEventData(action) {
  try {
    yield updateEventData(action.payload);
  } catch (error) {
    console.log('LOGOUT FAILED -- CHECK YOUR SERVER', error);
  }
}

function* eventSaga() {
  yield takeLatest(EVENT_ACTIONS.FETCH_UPCOMING_EVENTS, fetchUpcomingEvents);
  yield takeLatest(EVENT_ACTIONS.FETCH_PAST_EVENTS, fetchPastEvents);
  yield takeLatest(EVENT_ACTIONS.PUT_EVENT_DATA, putEventData);
  yield takeLatest(EVENT_ACTIONS.POST_EVENT, addEventData)
}

export default eventSaga;