import repoReducer from './repoReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    repos: repoReducer,
    user: userReducer,
});

export default rootReducer;
