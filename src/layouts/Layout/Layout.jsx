import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'sanitize.css/sanitize.css';

import './styles.css';

import LoginLayout from '../LoginLayout';
import MainLayout from '../MainLayout';
import Home from '../Home';
import Transactions from '../Transactions';
import Overview from '../Overview';
import Settings from '../Settings';
import NotFound from '../NotFound';
import Login from '../Login';

@withRouter
export default class Layout extends PureComponent {
    render() {
        return (
            <Switch
                key={ location.pathname }
                location={ location }
            >
                <Route
                    path="/login"
                    exact={ true }
                    render={ matchProps => (
                        <LoginLayout>
                            <Login { ...matchProps } />
                        </LoginLayout>
                    ) }
                />

                <Route
                    path="/"
                    exact={ true }
                    render={ matchProps => (
                        <MainLayout>
                            <Home { ...matchProps } />
                        </MainLayout>
                    ) }
                />

                <Route
                    path="/transactions"
                    exact={ true }
                    render={ matchProps => (
                        <MainLayout>
                            <Transactions { ...matchProps } />
                        </MainLayout>
                    ) }
                />

                <Route
                    path="/overview"
                    exact={ true }
                    render={ matchProps => (
                        <MainLayout>
                            <Overview { ...matchProps } />
                        </MainLayout>
                    ) }
                />

                <Route
                    path="/settings"
                    exact={ true }
                    render={ matchProps => (
                        <MainLayout>
                            <Settings { ...matchProps } />
                        </MainLayout>
                    ) }
                />

                <Route
                    path="*"
                    render={ matchProps => (
                        <NotFound { ...matchProps } />
                    ) }
                />
            </Switch>
        );
    }
}
