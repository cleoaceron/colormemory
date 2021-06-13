import {all} from 'redux-saga/effects';
import {saga as scoresSaga} from './scores';

export default function* rootSaga() {
  yield all([scoresSaga()]);
}
