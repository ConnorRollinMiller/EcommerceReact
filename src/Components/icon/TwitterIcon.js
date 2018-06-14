import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const TwitterIcon = ({ ...props }) => (
	<FontAwesomeIcon
		className={ props.className }
		icon={ [ 'fab', 'twitter' ] }
		size={ props.size }
		onClick={ props.onClick }
	/>
);

TwitterIcon.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default TwitterIcon;