import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const UpArrow = ({ ...props }) => (
   <FontAwesomeIcon
      className={`${props.className}`}
      icon={['fas', 'caret-up']}
      size={props.size}
   />
);

UpArrow.propTypes = {
   className: PropTypes.string,
   size: PropTypes.string.isRequired
};

export default UpArrow;
