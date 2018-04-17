import moment from 'moment';
import HTTPStatuses from 'httpstatuses';

import { apod } from '@pro/apod/api';

export default function* (action, { call, put }) {
    yield put({ type: 'fetchDataStart' });

    const resp = yield call(apod, { date: moment().format('YYYY-MM-DD') });
    if (resp.status === HTTPStatuses.ok) {
        yield put({ type: 'update', payload: { data: resp.data, error: false }});
    } else {
        yield put({ type: 'update', payload: { error: true }});
    }

    yield put({ type: 'fetchDataEnd' });
}
