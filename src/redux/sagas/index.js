import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import userDataSaga from './userDataSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    userDataSaga(),
    // watchIncrementAsync()
  ]);
}
