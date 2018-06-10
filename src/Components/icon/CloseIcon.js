import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const CloseIcon = ({ ...props }) => (
	<FontAwesomeIcon
		className={ `${ props.className } secondary-color` }
		icon='times-circle'
		size={ props.size }
		onClick={ props.onClick }
	/>
);

CloseIcon.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

export default CloseIcon;