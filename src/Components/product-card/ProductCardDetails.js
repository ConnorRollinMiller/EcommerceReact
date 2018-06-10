import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCardDetails = ({ ...props }) => (
	<div>
		<p className='text-uppercase text-white-50 mb-0'>
			{ props.shoe.Brand }
		</p>
		<Link to={ `/shop/${ props.shoe.ShoeId }` }>
			<h4 className='product-card-title text-uppercase h5 text-truncate mb-0'>
				{ props.shoe.Colorway }
			</h4>
		</Link>
		<p className='product-card-price mb-0'>
			${ props.shoe.Price.toFixed(2) }
		</p>
	</div>
);

ProductCardDetails.propTypes = {
	shoe: PropTypes.object.isRequired
}

export default ProductCardDetails;