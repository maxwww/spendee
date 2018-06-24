import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { setTitle, isLogged } from '../../decorators';

@setTitle(() => 'home')
@isLogged(true)
export default class Home extends PureComponent {
    render() {
        return (
            <div className="jumbotron">
                <h1>
                    <FormattedMessage id="pages.home.title"/>
                </h1>

                <p className="lead">
                    <FormattedMessage id="pages.home.intro"/>
                </p>

                <Link
                    className="btn btn-lg btn-primary"
                    to={ '/transactions' }
                >
                    <FormattedMessage id="pages.home.get_more"/>
                </Link>
            </div>
        );
    }
}
