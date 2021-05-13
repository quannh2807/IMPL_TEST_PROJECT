import axiosInstance from './axios';

const repoApi = {
    getRepos: (userName, params) => {
        const url = `/users/${userName}/repos`;

        return axiosInstance.get(url, { params });
    },
};

export default repoApi;
