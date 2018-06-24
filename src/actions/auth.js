import md5 from 'md5';

import {DEFAULT_CATEGORIES, DELAY} from '../constants';

export const FIND_USER_REQUEST = 'FIND_USER_REQUEST';
export const FIND_USER_SUCCESS = 'FIND_USER_SUCCESS';
export const FIND_USER_ERROR = 'FIND_USER_ERROR';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';


export function singIn(data) {

    return (dispatch) => {
        dispatch({ type: FIND_USER_REQUEST });

        if (data && data.login && data.password) {
            let users = localStorage.getItem('users');
            users = users ? JSON.parse(users) : {};

            if (users[data.login]) {
                if (md5(data.password) === users[data.login].password) {
                    localStorage.setItem('auth', data.login);

                    setTimeout(() => {
                        dispatch({
                            type: FIND_USER_SUCCESS,
                            payload: users[data.login],
                        });
                    }, DELAY);
                } else {
                    setTimeout(() => {
                        dispatch({
                            type: FIND_USER_ERROR,
                            payload: { errors: ['Password is incorrect'] },
                        });
                    }, DELAY);
                }
            } else {
                setTimeout(() => {
                    dispatch({
                        type: FIND_USER_ERROR,
                        payload: { errors: ['User not found'] },
                    });
                }, DELAY);
            }
        } else {
            setTimeout(() => {
                dispatch({
                    type: FIND_USER_ERROR,
                    payload: { errors: ['Invalid data'] },
                });
            }, DELAY);

        }

    };
}

export function singUp(data) {

    return (dispatch) => {
        dispatch({ type: CREATE_USER_REQUEST });

        if (data && data.login && data.password) {
            let users = localStorage.getItem('users');
            users = users ? JSON.parse(users) : {};

            if (!users[data.login]) {
                const user = {
                    userInfo: {
                        login: data.login,
                    },
                    categories: DEFAULT_CATEGORIES,
                    password: md5(data.password),
                };
                users[data.login] = user;
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('auth', data.login);

                setTimeout(() => {
                    dispatch({
                        type: CREATE_USER_SUCCESS,
                        payload: user,
                    });
                }, DELAY);
            } else {
                setTimeout(() => {
                    dispatch({
                        type: CREATE_USER_ERROR,
                        payload: { errors: ['Login is registered'] },
                    });
                }, DELAY);
            }

        } else {
            setTimeout(() => {
                dispatch({
                    type: CREATE_USER_ERROR,
                    payload: { errors: ['Invalid data'] },
                });
            }, DELAY);

        }
    };
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem('auth');
        dispatch({ type: LOG_OUT_SUCCESS });
    };
}
