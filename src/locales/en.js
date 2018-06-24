import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

addLocaleData([...en]);

export default {
    // General
    'name': 'Spendee App',
    'logout': 'Log out',

    // Titles
    'title.home': 'Spendee App',
    'title.page_not_found': 'Page not found',
    'title.login': 'Login',
    'title.transactions': 'Transactions',
    'title.settings': 'Settings',
    'title.overview': 'Overview',

    // Menu
    'menu.home': 'Spendee App',
    'menu.transactions': 'Transactions',
    'menu.overview': 'Overview',
    'menu.settings': 'Settings',

    // Home Page
    'pages.home.title': 'Spendee App',
    'pages.home.intro': 'Spendee is a personal expense tracking app that helps you to make intelligent choices about how to divert your money for maximum benefit.',
    'pages.home.get_more': 'Get more',

    // Login Page
    'login_page.please_sign_in': 'Please sign in or sing up',
    'login_page.sign_up': 'Sing up',
    'login_page.login_placeholder': 'Login',
    'login_page.password_placeholder': 'Password',
    'login_page.sig_in_button': 'Sign in',

    // Settings Page
    'settings_page.main': 'Main Settings',
    'settings_page.categories': 'Categories Settings',
    'settings_page.add_category': 'Add new category',
    'settings_page.category_type': 'Type',
    'settings_page.category_name': 'Name',
    'settings_page.category_create': 'Create',
    'settings_page.category.income_list': 'Income categories',
    'settings_page.category.expense_list': 'Expense categories',
    'settings_page.type.expense': 'Expense',
    'settings_page.type.income': 'Income',
    'settings_page.category.edit': 'Edit',
    'settings_page.category.delete': 'Delete',

    // Transactions Page
    'transactions_page.total': 'Total - {total}',
};
