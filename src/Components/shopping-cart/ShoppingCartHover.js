import React from 'react';
import PropTypes from 'prop-types';
import CartList from './CartList';

const ShoppingCartHover = ({ ...props }) => (
	<div className='shopping-cart-hover-container bg-white p-4 rounded'>
		{
			props.cart.length > 0 ?
				(
					<CartList
						total={ props.total }
						cart={ props.cart }
						removeFromCart={ props.removeFromCart }
					/>
				) :
				<span className='secondary-color'>No Items In Cart</span>
		}
	</div>
);

ShoppingCartHover.propTypes = {
	removeFromCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
	total: PropTypes.string.isRequired
}

export default ShoppingCartHover;