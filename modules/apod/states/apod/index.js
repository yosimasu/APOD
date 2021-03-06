import reducers from './reducers';
import effects from './effects';

export default {
    namespace: 'apod',
    state: {
        data: null,
        error: false,
        loading: false,
    },
    reducers,
    effects,
};
