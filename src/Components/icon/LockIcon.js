import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class UserIcon extends Component {

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<FontAwesomeIcon
				className={ this.props.className }
				icon={ [ 'fas', 'lock' ] }
				size={ this.props.size }
			/>
		);
	}
}

UserIcon.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string.isrequired
}

export default UserIcon;