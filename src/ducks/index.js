import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as types from './actionTypes';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const actionCreator = props => props;

export {store, types, actionCreator};
