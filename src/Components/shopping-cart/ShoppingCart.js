import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartTotal from './CartTotal';
import CartIcon from './CartIcon';
import ShoppingCartDropdown from './ShoppingCartDropdown';
import './css/ShoppingCart.css';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';
import { addNotification } from '../../redux/actions/notificationActions';
import { NotificationCodes } from '../../redux/actions';

class ShoppingCart extends Component {
	render() {
		return (
			<div className='nav-link' id='shopping-cart'>
				<CartTotal total={ this.props.total.toFixed(2) }>
					Cart /
				</CartTotal>
				<CartIcon itemNumber={ this.props.cart.length } />
				<ShoppingCartDropdown
					cart={ this.props.cart }
					total={ this.props.total.toFixed(2) }
					removeFromCart={ this.props.removeFromCart }
				/>
			</div>
		);
	}
}

ShoppingCart.propTypes = {
	cart: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
	total: state.cartReducer.total
});

const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (id, price) => {
		dispatch(removeItemFromCart(id, price));
		dispatch(addNotification(NotificationCodes.REMOVE_FROM_CART))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);