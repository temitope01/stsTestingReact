import * as types from './actionTypes';
import UserApi from '../api/usersApi';

export function createUserSuccess(user) {
    return {type: types.CREATE_USER, user};
}

export function createUser(user) {
    return function (dispatch) {
        return UserApi.createUser(user).then(user => {
            dispatch(createUserSuccess(user));
        }).catch(err => {
            throw(err);
        })
    }
}