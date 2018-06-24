import { DELAY } from '../constants';

export const FIND_CATEGORIES_REQUEST = 'FIND_CATEGORIES_REQUEST';
export const FIND_CATEGORIES_SUCCESS = 'FIND_CATEGORIES_SUCCESS';
export const FIND_CATEGORIES_ERROR = 'FIND_CATEGORIES_ERROR';

export function loadTransactions(user) {

    return (dispatch) => {
        dispatch({ type: FIND_CATEGORIES_REQUEST });

        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : {};

        if (users[user] && users[user].categories) {
            setTimeout(() => {
                dispatch({
                    type: FIND_CATEGORIES_SUCCESS,
                    payload: {
                        categories: users[user].categories,
                    },
                });
            }, DELAY);
        } else {
            setTimeout(() => {
                dispatch({
                    type: FIND_CATEGORIES_ERROR,
                });
            }, DELAY);
        }
    };
}
