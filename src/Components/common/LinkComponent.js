import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class LinkComponent extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<Link className={ `${ this.props.className }` } to={ this.props.to } target={ this.props.target } replace>
				{ this.props.children }
			</Link>
		);
	}
}

LinkComponent.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string.isRequired
}

LinkComponent.defaultProps = {
	className: '',
	target: ''
}