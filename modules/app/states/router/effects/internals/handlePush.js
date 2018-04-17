import { delay } from '@pro/core';

export default [
    function* handlePush({ take, call, put }) {
      while (true) {
        const { payload } = yield take('handlePush')
        yield put({
          type: 'apply',
          payload,
        })
        // debounce, see https://github.com/react-community/react-navigation/issues/271
        yield call(delay, 500)
      }
    },
    { type: 'watcher' },
  ];
