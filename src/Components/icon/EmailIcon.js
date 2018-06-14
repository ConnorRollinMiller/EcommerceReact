import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const EmailIcon = ({ ...props }) => (
	<FontAwesomeIcon
		className={ props.className }
		icon={ [ 'fas', 'envelope' ] }
		size={ props.size }
		onClick={ props.onClick }
	/>
);

EmailIcon.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
	onClick: PropTypes.func,
}

EmailIcon.defaultProps = {
	size: '1x'
}

export default EmailIcon;