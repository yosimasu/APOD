import { NavigationActions } from 'react-navigation';

const actions = Object.values(NavigationActions).filter(
    x => typeof x === 'string' && x.startsWith('Navigation/')
);

const isPushAction = action =>
  action.type === NavigationActions.NAVIGATE ||
  action.type === NavigationActions.PUSH

export default [
    function* watch({ take, put }) {
      while (true) {
        const action = yield take(actions)
        yield put({
          type: isPushAction(action) ? 'handlePush' : 'apply',
          payload: action,
        })
      }
    },
    { type: 'watcher' },
];
