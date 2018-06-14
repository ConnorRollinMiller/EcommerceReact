import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Input from '../form/Input';
import Select from '../form/Select';
import PrimaryButton from '../button/PrimaryButton';

import { connect } from 'react-redux';
import { inputChange } from '../../redux/actions/checkoutActions';
import { COUNTRIES, STATES } from '../../AppConstants';

class CheckoutForm extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.firstName !== this.props.firstName) {
			return true;
		} else if (nextProps.lastName !== this.props.lastName) {
			return true;
		} else if (nextProps.country !== this.props.country) {
			return true;
		} else if (nextProps.state !== this.props.state) {
			return true;
		} else if (nextProps.city !== this.props.city) {
			return true;
		} else if (nextProps.zipCode !== this.props.zipCode) {
			return true;
		} else if (nextProps.streetAddress !== this.props.streetAddress) {
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
			<Form className='w-50 p-4 d-flex flex-column' onSubmit={ e => e.preventDefault() }>
				<div className='form-group row'>
					<Input
						inline={ true }
						type='text'
						name='firstName'
						value={ this.props.firstName }
						placeholder='First Name'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
					<Input
						inline={ true }
						type='text'
						name='lastName'
						value={ this.props.lastName }
						placeholder='Last Name'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
				</div>
				<div className='form-group row'>
					<div className='col'>
						<Select
							name='country'
							options={ [ 'Select Country', ...COUNTRIES ] }
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
					</div>
					<div className='col'>
						<Select
							name='state'
							options={ [ 'Select State', ...STATES ] }
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						/>
					</div>
				</div>
				<Input
					type='text'
					name='streetAddress'
					value={ this.props.streetAddress }
					placeholder='Street Address'
					onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
				/>
				<div className='form-group row'>
					<Input
						inline={ true }
						type='text'
						name='city'
						value={ this.props.city }
						placeholder='City'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
					<Input
						inline={ true }
						type='text'
						name='zipCode'
						value={ this.props.zipCode }
						placeholder='Zip Code'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
				</div>
				<div className='form-group row'>
					<Input
						inline={ true }
						type='tel'
						name='phone'
						value={ this.props.phone }
						placeholder='Phone'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
					<Input
						inline={ true }
						type='email'
						name='email'
						value={ this.props.email }
						placeholder='Email'
						onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
					/>
				</div>
				<PrimaryButton>
					Place Order
				</PrimaryButton>
			</Form>
		);
	}
}

CheckoutForm.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
	streetAddress: PropTypes.string.isRequired,
	zipCode: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	inputChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
	firstName: state.checkoutReducer.firstName,
	lastName: state.checkoutReducer.lastName,
	country: state.checkoutReducer.country,
	state: state.checkoutReducer.state,
	streetAddress: state.checkoutReducer.streetAddress,
	city: state.checkoutReducer.city,
	zipCode: state.checkoutReducer.zipCode,
	phone: state.checkoutReducer.phone,
	email: state.checkoutReducer.email
});

const mapDispatchToProps = (dispatch) => ({
	inputChange: (name, value) => dispatch(inputChange(name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);