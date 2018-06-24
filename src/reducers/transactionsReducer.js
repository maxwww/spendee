import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({});

export default function transactionsReducer(state = INITIAL_STATE, { type }) {
    switch (type) {
        default:
            return state;
    }
}
