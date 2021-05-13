import axiosInstance from './axios';

const userApi = {
    getUser: userName => {
        const url = `/users/${userName}`;

        return axiosInstance.get(url);
    },
};

export default userApi;
