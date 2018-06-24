import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.css';

import Header from '../../components/Header';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

@connect(store => ({
    user: store.user,
    menu: store.main.menu,
}), dispatch => ({
    logout: () => dispatch(logout()),
}))
export default class MainLayout extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        user: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        menu: PropTypes.array.isRequired,
    };

    static propTypes = {
        children: PropTypes.any,
    };

    render() {
        const { menu, user, logout, children } = this.props;

        return (
            <React.Fragment>

                <Header
                    menu={ menu }
                    user={ user }
                    logout={ logout }
                />

                <main
                    role="main"
                    className="container"
                >
                    { children }
                </main>
            </React.Fragment>
        );
    }
}
