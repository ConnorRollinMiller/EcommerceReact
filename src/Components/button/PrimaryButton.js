import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PrimaryButton extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <button
            className={ `btn btn-primary
				${this.props.largeButton && 'btn-lg' }
				${this.props.fullWidth && 'btn-block' }
				${this.props.className }` }
            onClick={ this.props.onClick }
         >
            { this.props.children }
         </button>
      );
   }
}

PrimaryButton.propTypes = {
   onClick: PropTypes.func,
   className: PropTypes.string,
   largeButton: PropTypes.bool.isRequired,
   fullWidth: PropTypes.bool.isRequired,
   children: PropTypes.string.isRequired,
};

PrimaryButton.defaultProps = {
   largeButton: false,
   fullWidth: false,
};

export default PrimaryButton;
