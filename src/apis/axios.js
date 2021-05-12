import axios from 'axios';
import queryString from 'query-string';
import token from './passport';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    async config => {
        const tokenData = await token();
        if (tokenData) {
            config.headers.authorization = `Bearer ${tokenData}`;
        }
        return config;
    },
    error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    response => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    },
);

export default axiosInstance;
