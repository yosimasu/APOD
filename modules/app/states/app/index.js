import reducers from './reudcers';
import effects from './effects';

export default {
    namespace: 'app',
    state: {
        data: null,
        error: false,
        loading: false,
    },
    reducers,
    effects,
};
