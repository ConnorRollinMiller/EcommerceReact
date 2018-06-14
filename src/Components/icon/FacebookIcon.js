import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const FacebookIcon = ({ ...props }) => (
	<FontAwesomeIcon
		className={ props.className }
		icon={ [ 'fab', 'facebook' ] }
		size={ props.size }
		onClick={ props.onClick }
	/>
);

FacebookIcon.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default FacebookIcon;