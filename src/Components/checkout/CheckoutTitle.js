import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/CheckoutTitle.css';

class CheckoutTitle extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<div className='checkout-title d-flex justify-content-center align-items-center py-4'>
				<h3 className='checkout-title-text text-uppercase mb-0'>Checkout Details</h3>
				<FontAwesomeIcon className='mx-3' icon={ 'angle-right' } size='2x' />
				<h3 className='checkout-title-text text-uppercase mb-0'>Order Complete</h3>
			</div>
		)
	}
}

export default CheckoutTitle;