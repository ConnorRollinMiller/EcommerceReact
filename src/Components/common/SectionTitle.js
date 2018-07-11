import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionTitle extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.title !== this.props.title) return true;
		return false;
	}

	render() {
		return (
			<div className='section-title row'>
				<b className='col'></b>
				<h2 className='col mb-0 p-4'>
					{ this.props.title }
				</h2>
				<b className='col'></b>
			</div>
		);
	}
}

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired
}

export default SectionTitle;