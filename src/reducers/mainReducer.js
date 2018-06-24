import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
    menu: [
        {
            name: 'transactions',
            link: '/transactions',
        },
        {
            name: 'settings',
            link: '/settings',
        },
        {
            name: 'overview',
            link: '/overview',
        },

    ],
});

export default function mainReducer(state = INITIAL_STATE, { type }) {
    switch (type) {
        default:
            return state;
    }
}
