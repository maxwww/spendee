import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class PublicLayout extends PureComponent {
    /**
     * @type {Object}
     */
    static propTypes = {
        children: PropTypes.any,
    };

    render() {
        const { children } = this.props;

        return (
            <div className="login-container text-center">
                { children }
            </div>
        );
    }
}
