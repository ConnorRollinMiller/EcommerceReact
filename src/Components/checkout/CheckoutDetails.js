import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../shopping-cart/CartItem';
import CheckoutForm from './CheckoutForm';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';

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

					<hr className='w-100 mt-0' />

					<strong className='h4 mb-0 text-center'>
						Total: <span className='secondary-color font-weight-bold'>${ this.props.total.toFixed(2) }</span>
					</strong>

					<hr className='w-100' />

					{
						this.props.cart.map(item =>
							<CartItem
								key={ item.id }
								id={ item.id }
								shoe={ item.shoe }
								removeFromCart={ this.props.removeFromCart }
							/>
						)
					}
				</div>
				<CheckoutForm />
			</div>
		)
	}
}

CheckoutDetails.propTypes = {
	cart: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
	total: state.cartReducer.total
});

const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (id, price) => dispatch(removeItemFromCart(id, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDetails);