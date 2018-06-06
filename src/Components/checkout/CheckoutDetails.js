import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutForm from './CheckoutForm';
import CheckoutCartItem from './CheckoutCartItem';

class CheckoutDetails extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.cart !== this.props.cart) {
			return true;
		} else if (nextProps.total !== this.props.total) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className='container py-4 d-flex align-items-stretch'>
				<div className='w-50 p-4 d-flex flex-column'>
					<strong className='h4 mb-2 text-center'>
						Total: <span className='secondary-color font-weight-bold'>${ this.props.total.toFixed(2) }</span>
					</strong>
					{
						this.props.cart.map(item =>
							<CheckoutCartItem
								key={ item.id }
								id={ item.id }
								shoe={ item.shoe }
								removeFromCart={ this.props.removeFromCart } />
						)
					}
				</div>
				<div className='w-50 p-4 d-flex flex-column'>
					<CheckoutForm />
				</div>
			</div>
		)
	}
}

CheckoutDetails.propTypes = {
	cart: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

export default CheckoutDetails;