import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutTitle from './CheckoutTitle';
import CheckoutDetails from './CheckoutDetails';
import NoCheckoutItems from './NoCheckoutItems';
import './css/CheckoutPage.css';

import { connect } from 'react-redux';

class CheckoutPage extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.cart !== this.props.cart) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<main className='main-section container-fluid d-flex align-items-center justify-content-center'>
				{
					this.props.cart.length > 0 ?
						(
							<div className='container'>
								<CheckoutTitle />
								<CheckoutDetails
									cart={ this.props.cart }
									total={ this.props.total }
									removeFromCart={ this.props.removeFromCart }
								/>
							</div>
						) : <NoCheckoutItems />
				}
			</main>
		);
	}
}

CheckoutPage.propTypes = {
	cart: PropTypes.array.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
});

export default connect(mapStateToProps)(CheckoutPage);