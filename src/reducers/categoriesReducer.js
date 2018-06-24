import Immutable from 'seamless-immutable';
import {
    FIND_CATEGORIES_REQUEST,
    FIND_CATEGORIES_SUCCESS,
    FIND_CATEGORIES_ERROR,
    CREATE_CATEGORIES_REQUEST,
    CREATE_CATEGORIES_SUCCESS,
    CREATE_CATEGORIES_ERROR,
    EDIT_CATEGORIES_REQUEST,
    EDIT_CATEGORIES_SUCCESS,
    EDIT_CATEGORIES_ERROR,
    DELETE_CATEGORIES_REQUEST,
    DELETE_CATEGORIES_SUCCESS,
    DELETE_CATEGORIES_ERROR,
} from '../actions/categories';

export const INITIAL_STATE = Immutable({
    loading: false,
    success: false,
    error: false,
    categories: {},
});

export default function categoriesReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case FIND_CATEGORIES_REQUEST:
        case CREATE_CATEGORIES_REQUEST:
        case EDIT_CATEGORIES_REQUEST:
        case DELETE_CATEGORIES_REQUEST:
            return state.merge({
                loading: true,
                success: false,
                error: false,
            });

        case FIND_CATEGORIES_SUCCESS:
        case CREATE_CATEGORIES_SUCCESS:
        case EDIT_CATEGORIES_SUCCESS:
        case DELETE_CATEGORIES_SUCCESS:
            return state.merge({
                loading: false,
                success: true,
                error: false,
                categories: payload.categories,
            });

        case FIND_CATEGORIES_ERROR:
        case CREATE_CATEGORIES_ERROR:
        case EDIT_CATEGORIES_ERROR:
        case DELETE_CATEGORIES_ERROR:
            return state.merge({
                loading: false,
                success: false,
                error: true,
            });

        default:
            return state;
    }
}
