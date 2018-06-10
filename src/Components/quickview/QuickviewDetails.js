import React from 'react';
import PropTypes from 'prop-types';

const QuickviewDetails = ({ ...props }) => (
	<div>
		<span className='text-uppercase text-black-50 mb-0'>
			{ props.shoe.Brand }
		</span>
		<h4 className='h5 mb-0 font-weight-bold mb-0'>
			{ props.shoe.Model }
		</h4>
		<h3 className='mb-0 font-weight-bold mb-0'>
			{ props.shoe.Colorway }
		</h3>
		<hr className='product-details-hr mx-auto' />
		<p className='h4 font-weight-bold mb-2'>
			${ props.shoe.Price.toFixed(2) }
		</p>
	</div>
);

QuickviewDetails.propTypes = {
	shoe: PropTypes.object.isRequired
}

export default QuickviewDetails;