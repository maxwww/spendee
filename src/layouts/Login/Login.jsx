import React, { PureComponent } from 'react';
import Loader from 'react-loader';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setTitle, isLogged } from '../../decorators';
import { singIn, singUp } from '../../actions/auth';

@setTitle(() => 'login')
@isLogged(false)
@connect(store => ({
    loading: store.auth.loading,
    errors: store.auth.errors,
}), dispatch => ({
    singIn: (data) => dispatch(singIn(data)),
    singUp: (data) => dispatch(singUp(data)),
}))
export default class PublicLayout extends PureComponent {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        singIn: PropTypes.func.isRequired,
        singUp: PropTypes.func.isRequired,
        errors: PropTypes.array.isRequired,
    };

    static contextTypes = {
        intl: PropTypes.object.isRequired,
    };

    setLogin = (event) => {
        this.setState({
            login: event.target.value,
        });
    };

    setPassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    singIn = () => {
        this.props.singIn(this.state);
    };

    singUp = () => {
        this.props.singUp(this.state);
    };

    state = {
        login: '',
        password: '',
    };

    render() {
        const { loading, errors } = this.props;

        return (
            <Loader loaded={ !loading }>
                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">
                        <FormattedMessage id="login_page.please_sign_in"/>
                    </h1>

                    { errors.map((item, index) => (
                        <div key={ index }>
                            { item }
                        </div>
                    )) }

                    <input
                        type="text"
                        className="form-control"
                        placeholder={ this.context.intl.formatMessage({ id: 'login_page.login_placeholder' }) }
                        autoFocus
                        onChange={ this.setLogin }
                    />

                    <input
                        type="password"
                        className="form-control"
                        placeholder={ this.context.intl.formatMessage({ id: 'login_page.password_placeholder' }) }
                        onChange={ this.setPassword }
                    />

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={ this.singIn }
                    >
                        <FormattedMessage id="login_page.sig_in_button"/>
                    </button>

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="button"
                        onClick={ this.singUp }
                    >
                        <FormattedMessage id="login_page.sign_up"/>
                    </button>
                </form>
            </Loader>
        );
    }
}
