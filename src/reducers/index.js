import {combineReducers} from 'redux';
import user from './userReducer';
import exams from './examReducer';
const rootReducer = combineReducers({
    user,
    exams
});

export default rootReducer;