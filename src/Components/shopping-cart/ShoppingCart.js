import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartTotal from './CartTotal';
import CartIcon from './CartIcon';
import ShoppingCartHover from './ShoppingCartHover';
import './css/ShoppingCart.css';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';

class ShoppingCart extends Component {
	render() {
		return (
			<div className='nav-link d-flex' id='shopping-cart'>
				<CartTotal total={ this.props.total }>
					Cart /
				</CartTotal>
				<CartIcon itemNumber={ this.props.cart.length } />
				<ShoppingCartHover
					cart={ this.props.cart }
					total={ this.props.total }
					removeFromCart={ this.props.removeFromCart }
				/>
			</div>
		);
	}
}

ShoppingCart.propTypes = {
	cart: PropTypes.array.isRequired,
	total: PropTypes.string.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
	total: state.cartReducer.total.toFixed(2)
});

const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (id, price) => dispatch(removeItemFromCart(id, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);