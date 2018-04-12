import { compose, createStore } from 'redux';

import reducer from './reducer';

let devtools = () => noop => noop;
if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
  
}

const enhancer = compose(
    devtools(),
);

const store = createStore(reducer, enhancer);

export default store;
