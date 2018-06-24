import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (isLogged = true) => (WrappedComponent) => {
    @connect(store => ({
        isLoggedIn: store.auth.isLoggedIn,
    }))
    class IsLoggedDecorator extends PureComponent {
        static propTypes = {
            location: PropTypes.any,
            history: PropTypes.any,
            isLoggedIn: PropTypes.bool.isRequired,
        };

        static contextTypes = {
            intl: PropTypes.object.isRequired,
        };

        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate(prevProps) {
            if (
                prevProps.location.pathname !== this.props.location.pathname
                || prevProps.isLoggedIn !== this.props.isLoggedIn
            ) {
                this.checkAuth();
            }
        }

        checkAuth = () => {
            const { isLoggedIn } = this.props;
            if (isLoggedIn && !isLogged) {
                this.redirectToHome();
            } else if (!isLoggedIn && isLogged) {
                this.redirectToLogin();
            }
        };

        redirectToHome = (to = '/') => {
            const { history, location: { pathname } } = this.props;
            history.replace({
                pathname: to,
                state: {
                    from: pathname,
                },
            });
        };

        redirectToLogin = (to = '/login') => {
            const { history, location: { pathname } } = this.props;
            history.replace({
                pathname: to,
                state: {
                    from: pathname,
                },
            });
        };

        render() {
            console.log(this.props.isLoggedIn);
            console.log(isLogged);
            if (this.props.isLoggedIn && !isLogged) {
                return <div/>;
            }

            if (!this.props.isLoggedIn && isLogged) {
                return <div/>;
            }

            return (
                <WrappedComponent { ...this.props }/>
            );
        }
    }

    return IsLoggedDecorator;
};
