import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { CATEGORIES_TYPES } from '../../constants';

const DEFAULT_CATEGORY_TYPE = CATEGORIES_TYPES[0];

export default class Settings extends PureComponent {
    static propTypes = {
        handleCreate: PropTypes.func.isRequired,
        categories: PropTypes.object.isRequired,
    };

    handleSelectType = (event) => {
        this.setState({
            type: event.target.value,
            category: '',
        });
    };

    handleSelectCategory = (event) => {
        this.setState({
            category: event.target.value,
        });
    };

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    state = {
        type: DEFAULT_CATEGORY_TYPE,
        category: '',
        date: null,
        amount: 0,
    };

    render() {
        const { categories } = this.props;
        const { type } = this.state;

        return (
            <form className="form-inline">
                <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={ this.handleSelectType }
                    defaultValue={ DEFAULT_CATEGORY_TYPE }
                >
                    { CATEGORIES_TYPES.map((item, index) => (
                        <FormattedMessage
                            id={ `settings_page.type.${item}` }
                            key={ index }
                        >
                            { (message) => <option
                                value={ item }
                            >{ message }</option> }
                        </FormattedMessage>
                    )) }
                </select>

                <select
                    className="custom-select my-1 mr-sm-2"
                    onChange={ this.handleSelectCategory }
                    defaultValue={ this.state.category }
                >
                    <option>Category</option>
                    { categories[type].map((item, index) => (
                        <option
                            key={ index }
                            value={ item.name }
                            // selected={ this.state.category === item.name }
                        >
                            { item.name }
                        </option>
                    )) }
                </select>

                <input
                    className="custom-date my-1 mr-sm-2"
                    type="date"
                />

                <input
                    className="custom-text my-1 mr-sm-2"
                    type="text"
                />

                <button
                    type="submit"
                    className="btn btn-primary my-1"
                    onClick={ this.handleClick }
                >
                    <FormattedMessage id="settings_page.category_create"/>
                </button>
            </form>
        );
    }
}
