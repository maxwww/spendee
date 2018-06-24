import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { IntlProvider } from 'react-intl';

import './modernizr';

import configureStore, { history } from './configureStore';
import Layout from './layouts/Layout';
import en from './locales/en';

const store = configureStore();


const render = (Component) => {
    ReactDOM.render(
        <Provider store={ store }>
            <IntlProvider
                locale="en"
                key="en"
                messages={ en }
            >
                <ConnectedRouter history={ history }>
                    <Component/>
                </ConnectedRouter>
            </IntlProvider>
        </Provider>,
        document.getElementById('root'),
    );
};

render(Layout);

if (module.hot) { // eslint-disable-line
    module.hot.accept('./layouts/Layout', () => { // eslint-disable-line
        render(Layout);
    });
}
