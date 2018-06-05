import React from 'react';
import PropTypes from 'prop-types';
import CheckoutForm from './CheckoutForm';
import CheckoutCartItem from './CheckoutCartItem';

import { removeItemFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const CheckoutDetails = ({ ...props }) => (
	<div className='container py-4 d-flex align-items-stretch'>
		<div className='w-50 p-4 d-flex flex-column'>
			<strong className='h4 mb-2 text-center'>
				Total: <span className='secondary-color font-weight-bold'>${ props.total.toFixed(2) }</span>
			</strong>
			{ props.cart.map(item =>
				<CheckoutCartItem
					key={ item.id }
					id={ item.id }
					shoe={ item.shoe }
					removeFromCart={ props.removeFromCart } />)
			}
		</div>
		<div className='w-50 p-4 d-flex flex-column'>
			<CheckoutForm />
		</div>
	</div>
);

CheckoutDetails.propTypes = {
	cart: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	total: state.cartReducer.total
});

const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (id, price) => dispatch(removeItemFromCart(id, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDetails);