import { DELAY } from '../constants';

export const FIND_CATEGORIES_REQUEST = 'FIND_CATEGORIES_REQUEST';
export const FIND_CATEGORIES_SUCCESS = 'FIND_CATEGORIES_SUCCESS';
export const FIND_CATEGORIES_ERROR = 'FIND_CATEGORIES_ERROR';

export const CREATE_CATEGORIES_REQUEST = 'CREATE_CATEGORIES_REQUEST';
export const CREATE_CATEGORIES_SUCCESS = 'CREATE_CATEGORIES_SUCCESS';
export const CREATE_CATEGORIES_ERROR = 'CREATE_CATEGORIES_ERROR';

export const EDIT_CATEGORIES_REQUEST = 'EDIT_CATEGORIES_REQUEST';
export const EDIT_CATEGORIES_SUCCESS = 'EDIT_CATEGORIES_SUCCESS';
export const EDIT_CATEGORIES_ERROR = 'EDIT_CATEGORIES_ERROR';

export const DELETE_CATEGORIES_REQUEST = 'DELETE_CATEGORIES_REQUEST';
export const DELETE_CATEGORIES_SUCCESS = 'DELETE_CATEGORIES_SUCCESS';
export const DELETE_CATEGORIES_ERROR = 'DELETE_CATEGORIES_ERROR';

export function loadCategories(user) {

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

export function createCategory(user, data) {
    return (dispatch) => {
        dispatch({ type: CREATE_CATEGORIES_REQUEST });

        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : {};

        if (users[user] && data.type && data.name) {
            users[user].categories[data.type].push({
                name: data.name,
                readOnly: false,
            });

            localStorage.setItem('users', JSON.stringify(users));

            setTimeout(() => {
                dispatch({
                    type: CREATE_CATEGORIES_SUCCESS,
                    payload: {
                        categories: users[user].categories,
                    },
                });
            }, DELAY);
        } else {
            setTimeout(() => {
                dispatch({
                    type: CREATE_CATEGORIES_ERROR,
                });
            }, DELAY);
        }
    };
}

export function editCategory(user, type, oldName, newName) {
    return (dispatch) => {
        dispatch({ type: EDIT_CATEGORIES_REQUEST });

        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : {};

        if (users[user] && type && oldName && newName) {
            const newCategories = users[user].categories[type].map((item) => {
                if (item.name === oldName) {
                    return { ...item, name: newName };
                }
                return item;
            });

            users[user].categories[type] = newCategories;

            localStorage.setItem('users', JSON.stringify(users));

            setTimeout(() => {
                dispatch({
                    type: EDIT_CATEGORIES_SUCCESS,
                    payload: {
                        categories: users[user].categories,
                    },
                });
            }, DELAY);
        } else {
            setTimeout(() => {
                dispatch({
                    type: EDIT_CATEGORIES_ERROR,
                });
            }, DELAY);
        }
    };
}

export function deleteCategory(user, type, name) {
    return (dispatch) => {
        dispatch({ type: DELETE_CATEGORIES_REQUEST });

        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : {};

        if (users[user] && type && name) {
            const newCategories = users[user].categories[type].filter((category) => {
                return category.name !== name;
            });

            users[user].categories[type] = newCategories;

            localStorage.setItem('users', JSON.stringify(users));

            setTimeout(() => {
                dispatch({
                    type: DELETE_CATEGORIES_SUCCESS,
                    payload: {
                        categories: users[user].categories,
                    },
                });
            }, DELAY);
        } else {
            setTimeout(() => {
                dispatch({
                    type: DELETE_CATEGORIES_ERROR,
                });
            }, DELAY);
        }
    };
}
