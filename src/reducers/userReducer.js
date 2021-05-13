import { FETCH_USER, CHANGE_USER_MESSAGES } from '../constants';
import userApi from '../apis/userApi';
import { fetchUser, changeUserMessages } from '../actions/userAction';

const initalState = {
    user: {},
    messages: null,
    isLoading: false,
};
const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_USER: {
            state.user = action.payload;

            return {
                ...state,
            };
        }

        case CHANGE_USER_MESSAGES: {
            state.messages = action.payload;

            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export const getUser = userName => async dispatch => {
    try {
        const user = await userApi.getUser(userName);
        await dispatch(fetchUser(user.data));
    } catch (error) {
        console.log('getUser ', error);
        await dispatch(changeUserMessages('Không tìm thấy username'));
    }
};

export default userReducer;
