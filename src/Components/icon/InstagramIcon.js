import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const InstagramIcon = ({ ...props }) => (
	<FontAwesomeIcon
		className={ props.className }
		icon={ [ 'fab', 'instagram' ] }
		size={ props.size }
		onClick={ props.onClick }
	/>
);

InstagramIcon.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default InstagramIcon;