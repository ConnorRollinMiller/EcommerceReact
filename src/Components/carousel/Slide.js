import React from 'react';
import PropTypes from 'prop-types';
import './css/Slide.css';

const Slide = ({ ...props }) => (
	<div
		className='slide p-4'
		style={ { display: props.isActive ? 'block' : 'none' } }>
		<img className='slide-img' src={ `/images/Carousel/360-AirJordan4/${ props.src }` } alt={ `Carousel Slide #${ props.src }` } />
	</div>
)

Slide.propTypes = {
	children: PropTypes.element,
	isActive: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired
}

export default Slide;