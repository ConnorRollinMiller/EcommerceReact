import React from 'react';
import FontAwesome from 'react-fontawesome'
import './css/HomeSlider.css';

const CarouselSlider = ({ ...props }) => (
	<section className='container-fluid align-items-center p-4' id='carousel-slider'>
		<FontAwesome
			className='ml-5 carousel-arrow'
			name='chevron-left'
		/>
		<div className='container row m-auto justify-content-center'>
			<h2 style={ { color: 'white' } }>Slider</h2>
		</div>
		<FontAwesome
			className='mr-5 carousel-arrow'
			name='chevron-right'
		/>
	</section>
);

export default CarouselSlider;