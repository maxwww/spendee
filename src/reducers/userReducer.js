import Immutable from 'seamless-immutable';
import { CREATE_USER_SUCCESS, FIND_USER_SUCCESS, LOG_OUT_SUCCESS } from '../actions/auth';

export const INITIAL_STATE = Immutable({
    loading: false,
    success: false,
    error: false,
    login: '',
});

export default function userReducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case FIND_USER_SUCCESS:
        case CREATE_USER_SUCCESS:
            return state.merge({
                loading: false,
                success: true,
                error: false,
                login: payload.userInfo.login,
            });

        case LOG_OUT_SUCCESS:
            return state.merge({
                login: '',
            });

        default:
            return state;
    }
}
