import React from 'react';
import SectionTitle from '../common/SectionTitle';
import BrandCard from './BrandCard';
import { Filters } from '../../redux/actions';

const BrandList = ({ ...props }) => (
	<section className='bg-light py-4'>
		<div className='container'>
			<SectionTitle title='Find Your brand' />
			<div className='row justify-content-stretch align-items-stretch py-4'>
				<BrandCard imgSource='adidas.png' brandName='Adidas' whichFilter={ Filters.SHOW_ADIDAS } />
				<BrandCard imgSource='nike.png' brandName='Nike' whichFilter={ Filters.SHOW_NIKE } />
				<BrandCard imgSource='jordan.png' brandName='Jordan' whichFilter={ Filters.SHOW_JORDAN } />
			</div>
		</div>
	</section>
);

export default BrandList;