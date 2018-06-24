import React from 'react';
import PropTypes from 'prop-types';

const setTitle = (getTitle) => (WrappedComponent) => {
    return class setTitle extends React.Component {
        static contextTypes = {
            intl: PropTypes.object.isRequired,
        };

        updateTitle = (props) => {
            const title = getTitle(props);
            if (title) {
                document.title = this.context.intl.formatMessage({ id: `title.${title}` });
            }
        };

        componentDidMount() {
            this.updateTitle(this.props);
        }

        componentWillReceiveProps(props) {
            this.updateTitle(props);
        }

        render() {
            return <WrappedComponent { ...this.props } />;
        }
    };
};

export default setTitle;
