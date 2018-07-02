import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const PrimaryButton = ({ ...props }) => (
//    <button
//       className={`btn btn-primary
// 			${props.largeButton && 'btn-lg'}
// 			${props.fullWidth && 'btn-block'}
// 			${props.className}`}
//       onClick={props.onClick}
//    >
//       {props.children}
//    </button>
// );

class PrimaryButton extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <button
            className={`btn btn-primary
				${this.props.largeButton && 'btn-lg'}
				${this.props.fullWidth && 'btn-block'}
				${this.props.className}`}
            onClick={this.props.onClick}
         >
            {this.props.children}
         </button>
      );
   }
}

PrimaryButton.propTypes = {
   children: PropTypes.string.isRequired,
   onClick: PropTypes.func,
   largeButton: PropTypes.bool,
   className: PropTypes.string
};

PrimaryButton.defaultProps = {
   largeButton: false,
   fullWidth: false
};

export default PrimaryButton;
