import reducers from './reducers';
import effects from './effects';

export default {
    namespace: 'apod',
    state: {
        data: {},
        error: false,
        loading: false,
    },
    reducers,
    effects,
};
