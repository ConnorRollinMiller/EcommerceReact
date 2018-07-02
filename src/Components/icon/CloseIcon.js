import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class CloseIcon extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <FontAwesomeIcon
            className={`${this.props.className} secondary-color`}
            icon="times-circle"
            size={this.props.size}
            onClick={this.props.onClick}
         />
      );
   }
}

CloseIcon.propTypes = {
   className: PropTypes.string,
   size: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired
};

CloseIcon.defaultProps = {
   className: ''
};

export default CloseIcon;
