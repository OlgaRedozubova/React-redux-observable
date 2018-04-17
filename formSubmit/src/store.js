import { createStore, applyMiddleware } from 'redux';
import{synHistoryWithStore } from 'react-router-redux';
import { brouserHistory } from 'react-router';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/index';
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(rootReducer, defaultState, applyMiddleware(epicMiddleware));

export const history = syncHistoryWithStore(brouserHistory, store);

export default store;

// export default createStore(
//   pingReducer,
//   applyMiddleware(epicMiddleware)
// );