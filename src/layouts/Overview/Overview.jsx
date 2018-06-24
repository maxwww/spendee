import React, { PureComponent } from 'react';

import { setTitle } from '../../decorators';

@setTitle(() => 'overview')
export default class Overview extends PureComponent {
    render() {
        return (
            <div>TODO</div>
        );
    }
}
