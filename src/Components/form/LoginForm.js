import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Form from './Form';
import PageTitle from '../common/PageTitle';
import PrimaryButton from '../button/PrimaryButton';
import InputWithIcon from './InputWithIcon';
import './css/FormPage.css';

class LoginForm extends Component {

	render() {
		return (
			<main>
				<PageTitle displayPageTitle={ false } />
				<div className='main-section container h-100 d-flex align-items-center justify-content-center p-4'>
					<Form className='w-50 p-4' onSubmit={ e => e.preventDefault() }>
						<h3 className='text-center my-4 text-capitalize'>Log in to your account</h3>
						<InputWithIcon
							iconName={ [ 'fa', 'user' ] }
							type='text'
							name='username'
							placeholder='Username'
							className='form-control-lg mb-4'
							onChange={ e => e.preventDefault() }
						/>
						<InputWithIcon
							iconName={ [ 'fas', 'lock' ] }
							type='password'
							name='password'
							placeholder='Password'
							className='form-control-lg mb-4'
							onChange={ e => e.preventDefault() }
						/>

						<PrimaryButton fullWidth={ true }>
							Submit
						</PrimaryButton>

						<p className='text-center my-4' style={ { fontSize: '1.2em' } }>
							New? <span className='secondary-color'>Sign Up</span>
						</p>
					</Form>
				</div>
			</main>
		);
	}
}

// FormPage.propTypes = {}

export default LoginForm;