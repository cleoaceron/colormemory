import {put, takeLatest, call} from 'redux-saga/effects';
import {GET_SCORES, GET_SCORES_SUCCESS, GET_SCORES_FAILED} from './types';

import scoresServices from 'api/services/scores';

export function* fnGetScores() {
  try {
    const reponse = yield call(scoresServices.api.fnGetScores);

    yield put({type: GET_SCORES_SUCCESS, payload: reponse.data.scores});
  } catch (error) {
    yield put({type: GET_SCORES_FAILED, payload: error});
  }
}

export default function* watcher() {
  yield takeLatest(GET_SCORES, fnGetScores);
}
