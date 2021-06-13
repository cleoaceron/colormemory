import {GET_SCORES_SUCCESS, GET_SCORES_FAILED, UPDATE_SCORES} from './types';

export const INITIAL_STATE = {
  loading: true,
  data: [],
  error: false,
  errorMessage: null,
};

const combinedScores = (data, payload) => {
  let dataHolder = [];
  data && data.map(item => dataHolder.push(item));
  dataHolder.push(payload);

  return dataHolder;
};

const scores = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SCORES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_SCORES_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
        errorMessage: action.payload,
      };

    case UPDATE_SCORES:
      return {
        ...state,
        data: combinedScores(state.data, action.payload),
      };

    default:
      return state;
  }
};

export default scores;
