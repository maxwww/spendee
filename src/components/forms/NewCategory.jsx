import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { CATEGORIES_TYPES } from '../../constants';

const DEFAULT_CATEGORY_TYPE = CATEGORIES_TYPES[0];

export default class Settings extends PureComponent {
    static propTypes = {
        handleCreate: PropTypes.func.isRequired,
        errors: PropTypes.array.isRequired,
    };

    handleClick = (e) => {
        const { handleCreate } = this.props;
        e.preventDefault();

        this.setState({
            name: '',
        });

        handleCreate({ ...this.state });
    };

    handleSelectType = (event) => {
        this.setState({
            type: event.target.value,
        });
    };

    handleEnterName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    state = {
        type: DEFAULT_CATEGORY_TYPE,
        name: '',
    };

    render() {

        return (
            <form className="form-inline">
                <label
                    className="my-1 mr-2"
                >
                    <FormattedMessage id="settings_page.category_type"/>
                </label>
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

                <label
                    className="my-1 mr-2"
                >
                    <FormattedMessage id="settings_page.category_name"/>
                </label>
                <input
                    value={ this.state.name }
                    className="custom-input my-1 mr-sm-2"
                    onChange={ this.handleEnterName }
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
