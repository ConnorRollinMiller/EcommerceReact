import React from 'react';
import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom'
import './css/CheckoutTitle.css';

const CheckoutTitle = ({ ...props }) => (
	<div className='checkout-title d-flex justify-content-center align-items-center py-4'>
		<h3 className='checkout-title-text text-uppercase mb-0'>Checkout Details</h3>
		<FontAwesome className='mx-3' name='angle-right' size='2x' />
		<h3 className='checkout-title-text text-uppercase mb-0'>Order Complete</h3>
	</div>
);

export default CheckoutTitle;