import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CheckoutForm extends Component {

	shouldComponentUpdate(nextProps) {
		return false;
	}

	render() {
		return (
			<form onSubmit={ (e) => e.preventDefault() }>

				<div className='form-group row'>
					<div className='col'>
						<input className='form-control' type='text' placeholder='First Name' required />
					</div>
					<div className='col'>
						<input className='form-control' type='text' placeholder='Last Name' required />
					</div>
				</div>

				<div className='form-group'>
					<input className='form-control' type='text' placeholder='Country' required />
				</div>

				<div className='form-group'>
					<input className='form-control' type='text' placeholder='Street Address' required />
				</div>

				<div className='form-group'>
					<input className='form-control' type='text' placeholder='State' required />
				</div>

				<div className='form-group'>
					<input className='form-control' type='text' placeholder='Zip Code' required />
				</div>

				<div className='form-group row'>
					<div className='col'>
						<input className='form-control' type='text' placeholder='Phone' />
					</div>
					<div className='col'>
						<input className='form-control' type='email' placeholder='Email' required />
					</div>
				</div>

				<div className='d-flex justify-content-center w-100'>
					<button className='btn btn-primary btn-block'>Place Order</button>
				</div>

			</form>
		);
	}
}

// CheckoutForm.propTypes = {}

export default CheckoutForm;