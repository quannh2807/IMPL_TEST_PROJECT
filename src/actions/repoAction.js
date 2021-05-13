import { FETCH_LIST_REPOS, CHANGE_REPO_MESSAGES } from '../constants';

export const fetchRepo = repo => {
    return {
        type: FETCH_LIST_REPOS,
        payload: repo,
    };
};

export const changeRepoMessages = msg => {
    return {
        type: CHANGE_REPO_MESSAGES,
        payload: msg,
    };
};
