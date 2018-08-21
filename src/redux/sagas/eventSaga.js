import { call, put, takeLatest } from 'redux-saga/effects';
import { EVENT_ACTIONS } from '../actions/eventActions';
import { addEvent, callUpcomingEvent, callPastEvent } from '../requests/eventRequests';

// Get upcoming or past events
function* fetchUpcomingEvents() {
  try {
    const event = yield callUpcomingEvent();
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

// Post new event to database
function* addEventData(newEvent) {
  try {
    console.log(newEvent, 'event to post');
    yield call(addEvent(newEvent))
    // dispatch get upcoming events

  } catch (error) {
    yield put({
      type: EVENT_ACTIONS.EVENT_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    })
  }
}

function* eventSaga() {
  yield takeLatest(EVENT_ACTIONS.FETCH_UPCOMING_EVENTS, fetchUpcomingEvents);
  yield takeLatest(EVENT_ACTIONS.POST_EVENT, addEventData)
}

export default eventSaga;