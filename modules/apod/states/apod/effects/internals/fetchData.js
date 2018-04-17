import moment from 'moment';
import HTTPStatuses from 'httpstatuses';

import { get } from 'lodash';
import { apod } from '@pro/apod/api';

export default function* (action, { call, put }) {
    const { payload } = action;
    
    yield put({ type: 'fetchDataStart', payload });

    const date = get(payload, 'date', moment().format('YYYY-MM-DD'));
    const resp = yield call(apod, { date });
    if (resp.status === HTTPStatuses.ok) {
        yield put({ type: 'update', payload: { date, data: resp.data, error: false }});
    } else {
        yield put({ type: 'update', payload: { date, error: true }});
    }

    yield put({ type: 'fetchDataEnd', payload });
}
