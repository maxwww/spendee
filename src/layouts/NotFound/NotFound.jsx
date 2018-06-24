import React, { PureComponent } from 'react';

import { setTitle } from '../../decorators';

@setTitle(() => 'page_not_found')
export default class NotFound extends PureComponent {
    render() {
        return (
            <img
                src="/images/404.gif"
            />
        );
    }
}
