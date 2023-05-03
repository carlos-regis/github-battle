import React from 'react';
import PropTypes, { element } from 'prop-types';
import withHover from './WithHover';

const container = {
    position: 'relative',
    display: 'flex',
};

class Tooltip extends React.Component {
    render() {
        const { children, element, hovering } = this.props;

        return (
            <div style={container}>
                {hovering === true && element}
                {children}
            </div>
        );
    }
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.node.isRequired,
};

export default withHover(Tooltip);
