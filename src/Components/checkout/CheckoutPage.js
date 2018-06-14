import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutTitle from './CheckoutTitle';
import CheckoutDetails from './CheckoutDetails';
import NoCheckoutItems from './NoCheckoutItems';

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
			<main className='main-section' >
				{
					this.props.cart.length > 0 &&
					<CheckoutTitle checkoutSuccess={ this.props.checkoutSuccess } />
				}
				{
					this.props.cart.length > 0 ?
						(
							<CheckoutDetails
								cart={ this.props.cart }
								total={ this.props.total }
								removeFromCart={ this.props.removeFromCart }
							/>
						) : (

							<NoCheckoutItems />
						)
				}
			</main>
		);
	}
}

CheckoutPage.propTypes = {
	cart: PropTypes.array.isRequired,
	checkoutSuccess: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart,
	checkoutSuccess: state.checkoutReducer.checkoutSuccess
});

export default connect(mapStateToProps)(CheckoutPage);