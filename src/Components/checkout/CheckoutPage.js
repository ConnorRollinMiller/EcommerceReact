import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import CheckoutTitle from './CheckoutTitle';
import CheckoutDetails from './CheckoutDetails';
import './css/CheckoutPage.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CheckoutPage extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<CheckoutTitle />
				{
					this.props.cart.length > 0 ?
						<CheckoutDetails cart={ this.props.cart } /> :
						(
							<div className='checkout-no-items py-4 d-flex flex-column justify-content-center align-items-center'>
								<FontAwesome className='mb-2 secondary-color' name='exclamation-triangle' size='5x' />
								<h3 className='text-capitalize my-4'>You don't have any items in your cart!</h3>
								<h4 className='text-capitalize font-weight-bold'>
									<Link className='mt-2' to='/shop'>
										<button className='btn btn-primary btn-lg'>Shop Now</button>
									</Link>
								</h4>
							</div>
						)
				}
			</div>
		);
	}
}

CheckoutPage.propTypes = {
	cart: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	cart: state.cartReducer.cart
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps)(CheckoutPage);