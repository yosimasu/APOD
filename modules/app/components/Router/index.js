import Container from './container';
import AppNavigator from './components/AppNavigator';

export function reducer(state, action = {}) {
    return AppNavigator.router.getStateForAction(action, state);
}

export default Container;
