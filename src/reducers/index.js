import repoReducer from './repoReducer';
import userReducer from './userReducer';
import stargazerReducer from './stargazerReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    repos: repoReducer,
    user: userReducer,
    star: stargazerReducer,
});

export default rootReducer;
