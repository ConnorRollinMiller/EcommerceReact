import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/HomeSlider.css';

const CarouselSlider = ({ ...props }) => (
	<section className='container-fluid align-items-center p-4' id='carousel-slider'>
		<FontAwesomeIcon
			className='ml-5 carousel-arrow'
			icon='chevron-left'
		/>
		<div className='container row m-auto justify-content-center'>
			<h2 className='text-white'>Slider</h2>
		</div>
		<FontAwesomeIcon
			className='mr-5 carousel-arrow'
			icon='chevron-right'
		/>
	</section>
);

export default CarouselSlider;