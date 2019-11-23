import axios from 'axios';
import qs from 'qs';
import {
    Message,
    MessageBox
} from 'element-ui';
const instance = axios.create({

    /*  baseURL: 'http://127.0.0.1:8010', */
    timeout: 1000,
    headers: {
        'Content-Type': 'text/html; charset=UTF-8'
    }
});
instance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
})
instance.interceptors.request.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
})
export function get(url, params, id="") {
    if (id !== '') {
        url += '/' + id;
    }
    return instance( {
        url: url,
        methods: 'get',
        params: params
    })
}
export default instance