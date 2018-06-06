import React, { Component } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import { Link } from 'react-router-dom';
import './css/ShoppingCart.css';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';

class ShoppingCart extends Component {
	render() {
		return (
			<button className='nav-link d-flex' id='shopping-cart'>
				Cart /
		<span id='shopping-cart-price'>${ this.props.total }</span>
				<span id='shopping-cart-icon'>
					<strong id='shopping-cart-item-num'>
						{ this.props.cart.length }
					</strong>
				</span>
				{
					<div className='shopping-cart-hover-container bg-white p-4 rounded'>
						{
							this.props.cart.length > 0 ? (
								<div>
									{
										this.props.cart.map(item =>
											<ShoppingCartItem
												key={ item.id }
												id={ item.id }
												shoe={ item.shoe }
												removeItemFromCart={ this.props.removeItemFromCart }
											/>
										)
									}
									<hr className='shopping-cart-hr mt-0' />
									<strong>Total: ${ this.props.total }</strong>
									<Link className='btn btn-primary btn-block text-white text-capitalize mt-2' to='/checkout'>
										Checkout
									</Link>
								</div>
							) : <span className='secondary-color'>No Items In Cart</span>
						}

					</div>
				}
			</button>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
	total: state.cartReducer.total.toFixed(2)
});

const mapDispatchToProps = (dispatch) => ({
	removeItemFromCart: (id, price) => dispatch(removeItemFromCart(id, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);