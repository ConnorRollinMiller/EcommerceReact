import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuickviewDetails = ({ ...props }) => (
	<div>
		<span className='text-uppercase text-black-50 mb-0'>
			{ props.shoe.Brand }
		</span>
		<Link to={ `/shop/${ props.shoe.ShoeId }` }>
			<h4 className='h5 mb-0 font-weight-bold mb-0'>
				{ props.shoe.Model }
			</h4>
			<h3 className='mb-0 font-weight-bold mb-2'>
				{ props.shoe.Colorway }
			</h3>
		</Link>
		<p className='h4 font-weight-bold mb-2'>
			${ props.shoe.Price.toFixed(2) }
		</p>
	</div>
);

QuickviewDetails.propTypes = {
	shoe: PropTypes.object.isRequired
}

export default QuickviewDetails;