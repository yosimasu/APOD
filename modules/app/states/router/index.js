import { reducer } from '@pro/app/components/Router';

import reducers from './reducers';
import effects from './effects';

export default {
    namespace: 'router',
    state: {
        ...reducer()
    },
    reducers,
    effects,
};
