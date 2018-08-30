import React from 'react';
import PropTypes from 'prop-types';
import CartTotal from './CartTotal';
import CartItem from './CartItem';
import LinkComponent from '../common/LinkComponent';

const ShoppingCartDropdown = ({ ...props }) => (
	<div className='shopping-cart-hover-container bg-white p-4 rounded text-center'>
		{
			props.cart.length > 0 ?
				(
					<div>
						{
							props.cart.map(item =>
								<CartItem
									key={ item.id }
									id={ item.id }
									shoe={ item.shoe }
									removeFromCart={ props.removeFromCart }
								/>
							)
						}
						<hr className='shopping-cart-hr mt-0' />
						<CartTotal total={ props.total } />
						<hr className='shopping-cart-hr' />
						<LinkComponent className='btn btn-primary btn-block text-white text-capitalize mt-2' to='/checkout'>
							Checkout
						</LinkComponent>
					</div>
				) : (
					<span className='secondary-color'>No Items In Cart</span>
				)
		}
	</div>
);

ShoppingCartDropdown.propTypes = {
	removeFromCart: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
	total: PropTypes.string.isRequired
}

export default ShoppingCartDropdown;