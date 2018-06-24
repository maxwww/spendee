import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import Immutable from 'seamless-immutable';

import rootReducer from './reducers';
import { INITIAL_STATE as authState } from './reducers/authReducer';
import { INITIAL_STATE as userState } from './reducers/userReducer';

export const history = createHistory();

const boot = () => {
    let initialState =
        {
            auth: Immutable(authState),
        };

    let auth = localStorage.getItem('auth');
    if (auth) {
        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : {};
        if (users[auth]) {
            const user = users[auth];
            initialState = {
                auth: Immutable({
                    ...authState,
                    isLoggedIn: true,
                }),
                user: Immutable({
                    ...userState,
                    login: user.userInfo.login,
                }),
            };

        }
    }

    return initialState;
};

export default function configureStore() {
    let preloadedState = boot();

    let store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(
            thunk,
            routerMiddleware(history),
        )),
    );

    return store;
}
