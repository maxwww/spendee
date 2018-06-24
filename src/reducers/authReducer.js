import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
    isLoggedIn: false,
    loading: false,
    success: false,
    error: false,
    errors: [],
});

import {
    FIND_USER_REQUEST,
    FIND_USER_SUCCESS,
    FIND_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    LOG_OUT_SUCCESS,
} from '../actions/auth';

export default function authReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case FIND_USER_REQUEST:
        case CREATE_USER_REQUEST:
            return state.merge({
                loading: true,
                success: false,
                error: false,
                isLoggedIn: false,
                errors: [],
            });

        case FIND_USER_SUCCESS:
        case CREATE_USER_SUCCESS:
            return state.merge({
                loading: false,
                success: true,
                error: false,
                isLoggedIn: true,
                errors: [],
            });

        case FIND_USER_ERROR:
        case CREATE_USER_ERROR:
            return state.merge({
                loading: false,
                success: false,
                error: true,
                errors: payload.errors,
            });

        case LOG_OUT_SUCCESS:
            return state.merge({
                loading: false,
                success: true,
                error: false,
                isLoggedIn: false,
                errors: [],
            });

        default:
            return state;
    }
}
