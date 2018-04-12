import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epics from './epics';
import reducer from './reducer';

let devtools = () => noop => noop;
if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  
}

const epicMiddleware = createEpicMiddleware(epics);

const enhancer = compose(
    applyMiddleware(epicMiddleware),
    devtools(),
);

const store = createStore(reducer, enhancer);

export default store;
