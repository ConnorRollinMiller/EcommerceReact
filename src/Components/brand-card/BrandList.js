import React from 'react';
import SectionTitle from '../common/SectionTitle';
import BrandCard from './BrandCard';
import { Filters } from '../../redux/actions';

const BrandList = ({ ...props }) => (
   <section className='bg-light p-4'>
      <SectionTitle title='Find Your brand' />
      <div className='row justify-content-stretch align-items-stretch p-4'>
         <BrandCard imgSource='adidas.png' brandName='Adidas' whichFilter={ Filters.SHOW_ADIDAS } />
         <BrandCard imgSource='nike.png' brandName='Nike' whichFilter={ Filters.SHOW_NIKE } />
         <BrandCard imgSource='jordan.png' brandName='Jordan' whichFilter={ Filters.SHOW_JORDAN } />
      </div>
   </section>
);

export default BrandList;