import React from 'react';
import PropTypes, { element } from 'prop-types';

const container = {
  position: 'relative',
  display: 'flex',
};

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hovering: true });
  }

  mouseOut() {
    this.setState({ hovering: false });
  }

  render() {
    const { hovering } = this.state;
    const { children, element } = this.props;

    return (
      <div
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        style={container}
      >
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

export default Tooltip;
