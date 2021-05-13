import { FETCH_LIST_REPOS, CHANGE_REPO_MESSAGES } from '../constants';
import repoApi from '../apis/repoApi';
import { fetchRepo, changeRepoMessages } from '../actions/repoAction';

const initalState = {
    repoItems: [],
    messages: null,
    page: 1,
    per_page: 30,
    isLoading: false,
    isLoadMore: false,
};
const repoReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_LIST_REPOS: {
            state.repoItems = action.payload;
            // state.page = action.payload.page;

            return {
                ...state,
            };
        }
        case CHANGE_REPO_MESSAGES: {
            state.messages = action.payload;

            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export const fetchListRepo = userName => async dispatch => {
    try {
        const res = await repoApi.getRepos(userName, {
            page: 1,
            per_page: 30,
        });
        await dispatch(fetchRepo(res.data));
    } catch (error) {
        console.log('fetchListRepo ', error);
        await dispatch(changeRepoMessages('Không tìm thấy username'));
    }
};

export default repoReducer;
