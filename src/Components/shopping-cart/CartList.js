import React from 'react';
import PropTypes from 'prop-types';
import CartTotal from './CartTotal';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartList = ({ ...props }) => (
	<div className='text-center'>
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
		<CartTotal total={ props.total }>
			Total:
		</CartTotal>
		<Link className='btn btn-primary btn-block text-white text-capitalize mt-2' to='/checkout'>
			Checkout
		</Link>
	</div>
);

CartList.propTypes = {
	cart: PropTypes.array.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	total: PropTypes.string.isRequired
}

export default CartList;