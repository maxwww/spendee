import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import cx from 'classname';

export default class PublicLayout extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        user: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        menu: PropTypes.array.isRequired,
    };

    toggleMenu = () => {
        this.setState((prevStates => {
            return ({
                showMenu: !prevStates.showMenu,
            });
        }));
    };

    handleLoginClick = (e) => {
        e.preventDefault();

        this.setState((prevStates => {
            return ({
                showLogout: !prevStates.showLogout,
            });
        }));
    };

    logout = (e) => {
        e.preventDefault();
        this.props.logout();
    };

    state = {
        showMenu: false,
        showLogout: false,
    };

    render() {
        const { user, menu } = this.props;
        const { showMenu, showLogout } = this.state;

        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

                <button
                    className={ cx('navbar-toggler', { 'collapsed': !showMenu }) }
                    type="button"
                    onClick={ this.toggleMenu }
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={ cx('collapse', 'navbar-collapse', 'justify-content-md-center', { 'show': showMenu }) }
                >
                    <Link
                        className="navbar-brand"
                        to={ '/' }
                    >
                        <FormattedMessage id="name"/>
                    </Link>

                    <ul className="navbar-nav">
                        { menu.map((item, index) => (
                            <li
                                key={ index }
                                className="nav-item"
                            >
                                <NavLink
                                    className="nav-link"
                                    to={ item.link }
                                >
                                    <FormattedMessage id={ `menu.${item.name}` }/>
                                </NavLink>
                            </li>
                        )) }
                        <li className={ cx('nav-item', 'dropdown', { 'show': showLogout }) }>
                            <a
                                className="nav-link dropdown-toggle"
                                onClick={ this.handleLoginClick }
                                href="#"
                            >
                                { user.login }
                            </a>
                            <div
                                className={ cx('dropdown-menu', { 'show': showLogout }) }
                            >
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={ this.logout }
                                >
                                    <FormattedMessage id="logout"/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
