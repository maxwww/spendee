import React, { PureComponent } from 'react';
import cx from 'classname';
import { FormattedMessage } from 'react-intl';

import { setTitle, isLogged } from '../../decorators';
import Categories from '../../containers/Categories/Categories';

const tabs = ['categories', 'main'];

@setTitle(() => 'settings')
@isLogged(true)
export default class Settings extends PureComponent {
    changeTab = (e, tab) => {
        e.preventDefault();
        this.setState({ activeTab: tab });
    };

    state = {
        activeTab: tabs[0],
    };

    render() {
        const { activeTab } = this.state;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs">
                            { tabs.map((tab, index) => (
                                <li
                                    key={ index }
                                    className="nav-item"
                                >
                                    <a
                                        className={ cx('nav-link', { 'active': tab === activeTab }) }
                                        onClick={ (e) => {
                                            this.changeTab(e, tab);
                                        } }
                                        href="#"
                                    >
                                        <FormattedMessage
                                            id={ `settings_page.${tab}` }
                                        />
                                    </a>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>

                { 'categories' === activeTab && (
                    <Categories/>
                ) }

                { 'main' === activeTab && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="my-3 p-3 bg-white rounded box-shadow">
                                <h6 className="border-bottom border-gray pb-2 mb-0">TODO</h6>
                                <div className="media text-muted pt-3">
                                    TODO
                                </div>
                            </div>
                        </div>
                    </div>
                ) }
            </React.Fragment>
        );
    }
}
