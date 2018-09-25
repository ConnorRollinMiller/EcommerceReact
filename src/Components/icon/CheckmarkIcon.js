import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const CheckmarkIcon = ({ className = '', size = '1x', onClick }) => (
   <FontAwesomeIcon
      className={ `${ className }` }
      icon='check'
      size={ size }
      onClick={ onClick }
   />
);

export default CheckmarkIcon;