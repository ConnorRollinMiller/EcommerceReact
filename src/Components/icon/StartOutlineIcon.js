import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const StarOutlineIcon = ({ ...props }) => (
	<FontAwesomeIcon
		className={ props.className }
		icon={ [ 'far', 'star' ] }
		size={ props.size }
		onClick={ props.onClick }
	/>
);

StarOutlineIcon.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	size: PropTypes.string
}

export default StarOutlineIcon;