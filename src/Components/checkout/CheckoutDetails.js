import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Input from '../form/Input';
import CartItem from '../shopping-cart/CartItem';
import PrimaryButton from '../button/PrimaryButton';

import { connect } from 'react-redux';
import { inputChange } from '../../redux/actions/checkoutActions';
import { removeItemFromCart } from '../../redux/actions/cartActions';

class CheckoutDetails extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.cart !== this.props.cart) {
			return true;
		} else if (nextProps.total !== this.props.total) {
			return true;
		} else if (nextProps.firstName !== this.props.firstName) {
			return true;
		} else if (nextProps.lastName !== this.props.lastName) {
			return true;
		} else if (nextProps.country !== this.props.country) {
			return true;
		} else if (nextProps.state !== this.props.state) {
			return true;
		} else if (nextProps.streetAddress !== this.props.streetAddress) {
			return true;
		} else if (nextProps.zipCode !== this.props.zipCode) {
			return true;
		} else if (nextProps.phone !== this.props.phone) {
			return true;
		} else if (nextProps.email !== this.props.email) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className='container py-4 d-flex align-items-stretch'>
				<div className='w-50 p-4 d-flex flex-column'>

					<hr className='w-100' />

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

				<Form className='w-50 p-4 d-flex flex-column' onSubmit={ e => e.preventDefault() }>
					<div className='form-group row'>
						<Input
							inline={ true }
							type='text'
							name='firstName'
							placeholder='First Name'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
						<Input
							inline={ true }
							type='text'
							name='lastName'
							placeholder='Last Name'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
					</div>
					<div className='form-group row'>
						<Input
							inline={ true }
							type='text'
							name='country'
							placeholder='Country'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
						<Input
							inline={ true }
							type='text'
							name='state'
							placeholder='State'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
					</div>
					<Input
						type='text'
						name='streetAddress'
						placeholder='Street Address'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
					<Input
						type='number'
						name='zipCode'
						placeholder='Zip Code'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
					<div className='form-group row'>
						<Input
							inline={ true }
							type='tel'
							name='phone'
							placeholder='Phone'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
						<Input
							inline={ true }
							type='email'
							name='email'
							placeholder='Email'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
					</div>
					<PrimaryButton>
						Place Order
					</PrimaryButton>
				</Form>
			</div>
		)
	}
}

CheckoutDetails.propTypes = {
	cart: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
	streetAddress: PropTypes.string.isRequired,
	zipCode: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	inputChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
	total: state.cartReducer.total,
	firstName: state.checkoutReducer.firstName,
	lastName: state.checkoutReducer.lastName,
	country: state.checkoutReducer.country,
	state: state.checkoutReducer.state,
	streetAddress: state.checkoutReducer.streetAddress,
	zipCode: state.checkoutReducer.zipCode,
	phone: state.checkoutReducer.phone,
	email: state.checkoutReducer.email
});

const mapDispatchToProps = (dispatch) => ({
	inputChange: (name, value) => dispatch(inputChange(name, value)),
	removeFromCart: (id, price) => dispatch(removeItemFromCart(id, price))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDetails);