import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import PropTypes from 'prop-types';

import { setTitle, isLogged } from '../../decorators';
import { loadTransactions } from '../../actions/transactions';
import NewTransaction from '../../components/forms/NewTransaction';
import { loadCategories } from '../../actions/categories';

@setTitle(() => 'transactions')
@isLogged(true)
@connect(store => ({
    transactions: store.transactions,
    categories: store.categories,
    login: store.user.login,
}), dispatch => ({
    loadTransactions: (user) => dispatch(loadTransactions(user)),
    loadCategories: (user) => dispatch(loadCategories(user)),
}))
export default class Transactions extends PureComponent {
    static propTypes = {
        transactions: PropTypes.object.isRequired,
        categories: PropTypes.object.isRequired,
        login: PropTypes.string.isRequired,
        loadCategories: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { loadCategories, login } = this.props;

        loadCategories(login);
    }

    render() {
        const { transactions, categories } = this.props;

        console.log('<<<<<<');
        console.log(categories);

        return (
            <Loader loaded={ !transactions.loading && !categories.loading }>

                <div className="row">

                    <div className="col-md-12">
                        <div className="my-3 p-3 bg-white rounded box-shadow">
                            <h6 className="border-bottom border-gray pb-2 mb-0">
                                <FormattedMessage
                                    values={ { total: 25 } }
                                    id="transactions_page.total"
                                />
                            </h6>
                            <div className="media text-muted pt-3">
                                <NewTransaction
                                    categories={ categories.categories }
                                    handleCreate={ console.log }
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Loader>
        );
    }
}
