import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutTitle from './CheckoutTitle';
import CheckoutDetails from './CheckoutDetails';
import NoCheckoutItems from './NoCheckoutItems';
import './css/CheckoutPage.css';

import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';

class CheckoutPage extends Component {
	render() {
		return (
			<div>
				<CheckoutTitle />
				{
					this.props.cart.length > 0 ?
						(
							<CheckoutDetails
								cart={ this.props.cart }
								total={ this.props.total }
								removeFromCart={ this.props.removeFromCart }
							/>
						) : <NoCheckoutItems />
				}
			</div>
		);
	}
}

CheckoutPage.propTypes = {
	cart: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
	total: state.cartReducer.total
});

const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (id, price) => dispatch(removeItemFromCart(id, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);