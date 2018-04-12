import Rx from 'rxjs/Rx';
import HTTPStatuses from 'httpstatuses';

import { apod } from 'app/api';

export default (action$, store) => action$.ofType('fetchData')
    .flatMap((action) => {
        return Rx.Observable.from(apod())
            .mergeMap((resp) => {
                if (resp.status === HTTPStatuses.ok) {
                    return Rx.Observable.of(
                        { type: 'update', payload: { data: resp.data } },
                        { type: 'fetchDataEnd' },
                    )
                }
            }).startWith({ type: 'fetchDataStart' });
    });
