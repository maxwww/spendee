import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class Settings extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
        };
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        handleEdit: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
        readOnly: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
    };

    handleEnterName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleEdit = () => {
        const { handleEdit, type } = this.props;
        const { name } = this.state;

        handleEdit(type, this.props.name, name);
    };

    handleDelete = () => {
        const { handleDelete, type, name } = this.props;

        handleDelete(type, name);
    };

    state = {
        name: '',
    };

    render() {
        const { readOnly /* handleEdit, handleDelete*/ } = this.props;
        const { name } = this.state;

        return (
            <div className="media text-muted pt-3">
                <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <form className="form-inline">
                        <input
                            value={ name }
                            className="custom-input my-1 mr-sm-2"
                            onChange={ this.handleEnterName }
                            type="text"
                            disabled={ readOnly }
                        />

                        { !readOnly && <button
                            type="button"
                            className="btn btn-sm btn-outline-success my-1 mr-sm-2"
                            onClick={ this.handleEdit }
                        >
                            <FormattedMessage id="settings_page.category.edit"/>
                        </button> }

                        { !readOnly && <button
                            type="button"
                            className="btn btn-sm btn-outline-danger my-1 mr-sm-2"
                            onClick={ this.handleDelete }
                        >
                            <FormattedMessage id="settings_page.category.delete"/>
                        </button> }
                    </form>
                </div>
            </div>
        );
    }
}
