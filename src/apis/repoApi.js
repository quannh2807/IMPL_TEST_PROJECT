import axiosInstance from './axios';

const repoApi = {
    getRepos: data => {
        const url = `/users/${data.userName}/repos`;

        return axiosInstance.get(url);
    },
};

export default repoApi;
