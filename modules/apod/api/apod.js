import axios from 'axios';
import HTTPStatuses from 'httpstatuses';
import URI from 'urijs';

const API_KEY = 'qD7zE6W35kPISoRM0o9srmGTldFuzjt9nrfkEWs7';
const END_POINT = 'https://api.nasa.gov/planetary/apod';

export default ({ date }) => {
    const uri = new URI(END_POINT);
    uri.search({
        date,
        api_key: API_KEY,
    });
    return axios
        .get(uri.readable())
        .then(resp => {;
            if (resp.status === HTTPStatuses.ok) {
                return {
                    status: resp.status,
                    data: resp.data,
                }
            }

            return {
                status: resp.status
            }
        })
        .catch(() => ({ status: HTTPStatuses.internalServerError }));
}
