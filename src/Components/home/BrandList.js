import React from 'react';
import SectionTitle from '../common/SectionTitle';
import BrandCard from './BrandCard';
import { Filters } from '../../redux/actions/actionTypes';

const BrandList = ({ ...props }) => (
	<section className='bg-light py-4'>
		<div className='container'>
			<SectionTitle title='Find Your Brand' />

			<div className='row justify-content-center align-items-stretch py-4'>
				<BrandCard imgSource='images/Brands/adidas.png' brandName='Adidas' whichFilter={ Filters.SHOW_ADIDAS } />
				<BrandCard imgSource='images/Brands/nike.png' brandName='Nike' whichFilter={ Filters.SHOW_NIKE } />
				<BrandCard imgSource='images/Brands/jordan.png' brandName='Jordan' whichFilter={ Filters.SHOW_JORDAN } />
			</div>
		</div>
	</section>
);

export default BrandList;