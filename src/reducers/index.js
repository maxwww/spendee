import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './mainReducer';
import auth from './authReducer';
import user from './userReducer';
import categories from './categoriesReducer';
import transactions from './transactionsReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    auth,
    main,
    user,
    categories,
    transactions,
});

export default rootReducer;
