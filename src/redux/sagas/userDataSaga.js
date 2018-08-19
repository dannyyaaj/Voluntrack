import { put, takeLatest } from 'redux-saga/effects';
import { USER_DATA_ACTIONS } from '../actions/userDataActions';
import { callUserData, updateUserData } from '../requests/userDataRequests';

// worker Saga: will be fired on "FETCH_USER_DATA" actions
function* fetchUserData() {
  try {
    const data = yield callUserData();
    yield put({
      type: USER_DATA_ACTIONS.SET_USER_DATA,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: USER_DATA_ACTIONS.USER_DATA_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    });
  }
}
/*
  Starts fetchUserData on each dispatched `FETCH_USER_DATA` action.
  Allows concurrent fetches of user data from person table.
*/
// function* userDataSaga() {
//   yield takeEvery('FETCH_USER_DATA', fetchUserData);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "FETCH_USER_DATA" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled and only the latest one will be run.
*/
function* putUserData(action) {
  try {
    yield updateUserData(action);
  } catch (error) {
    console.log('LOGOUT FAILED -- CHECK YOUR SERVER', error);
  }
}

function* userDataSaga() {
  yield takeLatest(USER_DATA_ACTIONS.PUT_USER_DATA, putUserData);
  yield takeLatest(USER_DATA_ACTIONS.FETCH_USER_DATA, fetchUserData);
}

export default userDataSaga;
