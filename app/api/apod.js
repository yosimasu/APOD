import axios from 'axios';
import HTTPStatuses from 'httpstatuses';

const API_KEY = 'qD7zE6W35kPISoRM0o9srmGTldFuzjt9nrfkEWs7';
const END_POINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export default () => {
    return axios
        .get(END_POINT)
        .then(resp => {
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
