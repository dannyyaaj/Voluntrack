import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import userDataSaga from './userDataSaga';
import eventSaga from './eventSaga';
import volunteerSaga from './volunteerSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    userDataSaga(),
    eventSaga(),
    volunteerSaga(),
    // watchIncrementAsync()
  ]);
}
