import axiosInstance from './axios';

const stargazerApi = {
    getStargazers: (data, params) => {
        const url = `/repos/${data.login}/${data.repo}/stargazers`;

        return axiosInstance.get(url, { params });
    },
};

export default stargazerApi;
