import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class TwitterIcon extends Component {

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<FontAwesomeIcon
				className={ this.props.className }
				icon={ [ 'fab', 'twitter' ] }
				size={ this.props.size }
				onClick={ this.props.onClick }
			/>
		);
	}
}


TwitterIcon.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default TwitterIcon;