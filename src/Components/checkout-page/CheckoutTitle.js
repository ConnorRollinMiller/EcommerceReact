import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/CheckoutTitle.css';

class CheckoutTitle extends Component {
	shouldComponentUpdate(nextProps) {
		if (nextProps.checkoutSuccess !== this.props.checkoutSuccess) return true;
		return false;
	}

	render() {
		return (
			<div className='checkout-title d-flex justify-content-center align-items-center py-4 px-1'>
				<h3
					className={
						this.props.checkoutSuccess
							? 'checkout-title-text text-uppercase mb-0 text-center'
							: 'checkout-title-text text-uppercase mb-0 text-white text-center'
					}>
					Checkout Details
            </h3>
				<FontAwesomeIcon className='mx-1 mx-sm-3' icon={ 'angle-right' } size='2x' />
				<h3
					className={
						this.props.checkoutSuccess
							? 'checkout-title-text text-uppercase mb-0 text-white text-center'
							: 'checkout-title-text text-uppercase mb-0 text-center'
					}>
					Order Complete
            </h3>
			</div>
		);
	}
}

CheckoutTitle.propsTypes = {
	checkoutSuccess: PropsTypes.bool.isRequired
};

export default CheckoutTitle;
