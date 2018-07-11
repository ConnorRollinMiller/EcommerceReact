import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const DownArrow = ({ ...props }) => (
	<FontAwesomeIcon
		className={ `${ props.className }` }
		icon={ [ 'fas', 'caret-down' ] }
		size={ props.size }
	/>
);

DownArrow.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string.isRequired,
}

export default DownArrow;