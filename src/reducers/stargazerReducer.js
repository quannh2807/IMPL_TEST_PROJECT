import {
    FETCH_STARGAZERS,
    CHANGE_STARGAZER_MESSAGES,
    CHANGE_STARGAZER_ISLOADING,
} from '../constants';
import stargazerApi from '../apis/stargazerApi';
import {
    fetchStargazers,
    changeStargazerLoading,
    changeStargazerMessages,
} from '../actions/stargazerAction';

const initalState = {
    stargazers: [],
    messages: '',
    isLoading: false,
};
const stargazerReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_STARGAZERS: {
            state.stargazers = action.payload;

            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export const loadStargazers =
    (data, params = { page: 1, per_page: 30 }) =>
    async dispatch => {
        try {
            const res = await stargazerApi.getStargazers(data, params);
            dispatch(fetchStargazers(res.data));
        } catch (err) {
            console.log('loadStargazers ', err);
        }
    };

export default stargazerReducer;
