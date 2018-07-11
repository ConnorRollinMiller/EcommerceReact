import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Slide.css';

class Slide extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.isActive !== this.props.isActive) return true;
		return false;
	}

	render() {
		return (
			<div
				className='slide p-4'
				style={ { display: this.props.isActive ? 'block' : 'none' } }>
				<img
					className='slide-img'
					src={ `/images/Carousel/360-AirJordan4/${ this.props.src }` }
					alt={ `Carousel Slide #${ this.props.src }` }
				/>
			</div>
		)
	}
}

Slide.propTypes = {
	children: PropTypes.element,
	isActive: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired
}

export default Slide;