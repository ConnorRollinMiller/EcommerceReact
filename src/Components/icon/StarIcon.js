import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const StarIcon = ({ ...props }) => (
	<FontAwesomeIcon
		className={ props.className }
		icon={ [ 'fas', 'star' ] }
		size={ props.size }
		onClick={ props.onClick }
	/>
);

StarIcon.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	size: PropTypes.string
}

export default StarIcon;