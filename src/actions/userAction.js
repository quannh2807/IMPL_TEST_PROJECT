import { FETCH_USER, CHANGE_USER_MESSAGES } from '../constants';

export const fetchUser = user => {
    return {
        type: FETCH_USER,
        payload: user,
    };
};

export const changeUserMessages = msg => {
    return {
        type: CHANGE_USER_MESSAGES,
        payload: msg,
    };
};
