import {
    FETCH_STARGAZERS,
    CHANGE_STARGAZER_MESSAGES,
    CHANGE_STARGAZER_ISLOADING,
} from '../constants';

export const fetchStargazers = stargazers => {
    return {
        type: FETCH_STARGAZERS,
        payload: stargazers,
    };
};

export const changeStargazerMessages = msg => {
    return {
        type: CHANGE_STARGAZER_MESSAGES,
        payload: msg,
    };
};
export const changeStargazerLoading = msg => {
    return {
        type: CHANGE_STARGAZER_ISLOADING,
        payload: msg,
    };
};
