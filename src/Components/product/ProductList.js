import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../common/SectionTitle';
import ProductCard from './ProductCard';
import './css/ProductList.css';

const ProductList = ({ ...props }) => (
	<section className='py-4'>
		<div className='container'>
			{
				props.sectionTitle &&
				<SectionTitle title={ props.sectionTitle } />
			}
			<div className='row justify-content-center py-4 m-0 w-100'>
				{
					props.shoes &&
					props.shoes.map(shoe =>
						<ProductCard
							key={ shoe.shoeId }
							shoe={ shoe }
						/>
					)
				}
			</div>
		</div>
	</section>
);

ProductList.propTypes = {
	sectionTitle: PropTypes.string,
	shoes: PropTypes.array,
}

export default ProductList;