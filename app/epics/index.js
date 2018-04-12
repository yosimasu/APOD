import { combineEpics } from 'redux-observable';

import fetchData from './fetchData';

export default combineEpics(
    fetchData,
);
