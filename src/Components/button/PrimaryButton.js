import React from 'react';
// import PropTypes from 'prop-types';

const PrimaryButton = ({
   largeButton = false,
   fullWidth = false,
   className = '',
   disabled = false,
   onClick,
   children }) => (
      <button
         className={ `btn btn-primary
				${largeButton && 'btn-lg' }
				${fullWidth && 'btn-block' }
				${className }` }
         onClick={ onClick }
         disabled={ disabled }>
         { children }
      </button>
   );

// PrimaryButton.propTypes = {
//    onClick: PropTypes.func,
//    className: PropTypes.string,
//    largeButton: PropTypes.bool.isRequired,
//    fullWidth: PropTypes.bool.isRequired,
//    children: PropTypes.string.isRequired,
// };

// PrimaryButton.defaultProps = {
//    largeButton: false,
//    fullWidth: false
// };

export default PrimaryButton;
