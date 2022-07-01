import axios from 'axios';
import {BASE_URL} from 'configs/url.config';

class HttpService {

    constructor() {
        axios.defaults.baseURL = BASE_URL;
    }

    get(url, config) {
        return axios.get(url, config);
    }

    post(url, data, config) {
        return axios.post(url, data, config);
    }

    put(url, data, config) {
        return axios.put(url, data, config);
    }

    patch(url, data, config) {
        return axios.patch(url, data, config);
    }

    delete(url, config) {
        return axios.delete(url, config);
    }
}

export default new HttpService();