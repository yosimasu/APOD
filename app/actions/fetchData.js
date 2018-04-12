import HTTPStatuses from 'httpstatuses';

import { apod } from 'app/api';

const fetchData = () => dispatch => {
    dispatch({
        type: 'fetchDataStart',
    });
    apod().then((resp) => {
        if (resp.status === HTTPStatuses.ok) {
            dispatch({
                type: 'update',
                payload: {
                    data: resp.data
                }
            })
        }
        dispatch({
            type: 'fetchDataEnd',
        });
    });
}

export default fetchData;
