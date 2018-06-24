export const SITE_LOGO = '/images/blank-user.jpg';
export const DELAY = 200;

export const CATEGORIES_TYPES = ['expense', 'income'];

export const DEFAULT_CATEGORIES = {
    expense: [
        { name: 'food', readOnly: true },
        { name: 'house', readOnly: true },
        { name: 'health', readOnly: true },
        { name: 'other', readOnly: true },
    ],
    income: [
        { name: 'salary', readOnly: true },
        { name: 'business', readOnly: true },
        { name: 'other', readOnly: true },
    ],
};
