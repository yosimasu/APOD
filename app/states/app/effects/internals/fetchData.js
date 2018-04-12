import { apod } from 'app/api';

export default function* (action, { call, put }) {
    yield put({ type: 'fetchDataStart' });
    const resp = yield call(apod);
    yield put({ type: 'update', payload: { data: resp.data }});
    yield put({ type: 'fetchDataEnd' });
}
