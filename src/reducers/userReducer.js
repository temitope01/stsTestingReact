import * as types from '../actions/actionTypes';

const initialState = {
    user: {}
}

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case types.CREATE_USER:
            return action.user;

        case types.LOG_IN_USER:
            return action.user;

        default:
            return state;
    }
}