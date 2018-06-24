import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Loader from 'react-loader';

import Item from './Item';
import NewCategory from '../../components/forms/NewCategory';
import { connect } from 'react-redux';
import { loadCategories, createCategory, editCategory, deleteCategory } from '../../actions/categories';

@connect(store => ({
    categories: store.categories,
    login: store.user.login,
}), dispatch => ({
    loadCategories: (user) => dispatch(loadCategories(user)),
    createCategory: (user, data) => dispatch(createCategory(user, data)),
    editCategory: (user, type, oldName, newName) => dispatch(editCategory(user, type, oldName, newName)),
    deleteCategory: (user, type, name) => dispatch(deleteCategory(user, type, name)),
}))
export default class Settings extends PureComponent {
    static propTypes = {
        categories: PropTypes.object.isRequired,
        loadCategories: PropTypes.func.isRequired,
        createCategory: PropTypes.func.isRequired,
        editCategory: PropTypes.func.isRequired,
        deleteCategory: PropTypes.func.isRequired,
        login: PropTypes.string.isRequired,
    };

    componentDidMount() {
        const { loadCategories, login } = this.props;

        loadCategories(login);
    }

    handleCreate = (data) => {
        const { createCategory, login } = this.props;

        createCategory(login, data);
    };

    editCategory = (type, oldName, newName) => {
        const { editCategory, login } = this.props;

        editCategory(login, type, oldName, newName);
    };

    deleteCategory = (type, name) => {
        const { deleteCategory, login } = this.props;

        deleteCategory(login, type, name);
    };

    render() {
        const { categories: { categories: { income, expense }, loading } } = this.props;

        return (
            <Loader loaded={ !loading }>

                <div className="row">

                    <div className="col-md-12">
                        <div className="my-3 p-3 bg-white rounded box-shadow">
                            <h6 className="border-bottom border-gray pb-2 mb-0">
                                <FormattedMessage
                                    id={ 'settings_page.add_category' }
                                />
                            </h6>
                            <div className="media text-muted pt-3">
                                <NewCategory
                                    handleCreate={ this.handleCreate }
                                    errors={ [] }
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-6">
                        <div className="my-3 p-3 bg-white rounded box-shadow">
                            <h6 className="border-bottom border-gray pb-2 mb-0">
                                <FormattedMessage id="settings_page.category.income_list"/>
                            </h6>

                            { income && income.map((item, index) => (
                                <Item
                                    key={ index }
                                    name={ item.name }
                                    handleEdit={ this.editCategory }
                                    handleDelete={ this.deleteCategory }
                                    readOnly={ item.readOnly }
                                    type="income"
                                />
                            )) }
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="my-3 p-3 bg-white rounded box-shadow">
                            <h6 className="border-bottom border-gray pb-2 mb-0">
                                <FormattedMessage id="settings_page.category.expense_list"/>
                            </h6>

                            { expense && expense.map((item, index) => (
                                <Item
                                    key={ index }
                                    name={ item.name }
                                    handleEdit={ this.editCategory }
                                    handleDelete={ this.deleteCategory }
                                    readOnly={ item.readOnly }
                                    type="expense"
                                />
                            )) }
                        </div>
                    </div>
                </div>
            </Loader>
        );
    }
}
