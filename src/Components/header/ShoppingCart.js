import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './css/ShoppingCart.css';

const ShoppingCart = ({ ...props }) => (
	<button className='nav-link d-flex' id='shopping-cart'>
		Cart /
		<span id='shopping-cart-price'>${ props.total }</span>
		<span id='shopping-cart-icon'>
			<strong id='shopping-cart-item-num'>
				{ props.cart.length }
			</strong>
		</span>
		{
			props.cart.length > 0 &&
			<div className='shopping-cart-hover-container bg-white p-4 rounded'>
				{ props.cart.map(item => <ShoppingCartItem key={ item.id } id={ item.id } shoe={ item.shoe } />) }
				<hr className='shopping-cart-hr bg-secondary' />
				<strong className='my-2'>Total: ${ props.total }</strong>
				<Link className='btn btn-primary btn-block text-white text-capitalize' to='/checkout'>
					Checkout
				</Link>
			</div>
		}
	</button>
);

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
	total: state.cartReducer.total.toFixed(2)
});

export default connect(mapStateToProps)(ShoppingCart);