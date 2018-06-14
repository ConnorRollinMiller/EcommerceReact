import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import PageTitle from '../common/PageTitle';
import PrimaryButton from '../button/PrimaryButton';
import InputWithIcon from './InputWithIcon';
import EmailIcon from '../icon/EmailIcon';
import UserIcon from '../icon/UserIcon';
import LockIcon from '../icon/LockIcon';
import { Link, Redirect } from 'react-router-dom';
import './css/FormPage.css';

import { connect } from 'react-redux';
import { accountInputChange, submitAccountRegister, resetAccountInputs } from '../../redux/actions/accountActions';

class RegisterForm extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.email !== this.props.email) {
			return true;
		} else if (nextProps.username !== this.props.username) {
			return true;
		} else if (nextProps.password !== this.props.password) {
			return true;
		} else if (nextProps.confirmPassword !== this.props.confirmPassword) {
			return true;
		} else if (nextProps.error !== this.props.error) {
			return true
		} else if (nextProps.errorMessage !== this.props.errorMessage) {
			return true;
		}
		return false;
	}

	componentWillUnmount() {
		this.props.resetAccountInputs();
	}

	render() {
		if (this.props.user) {
			return <Redirect to='/' />
		}
		return (
			<main>
				<PageTitle displayBreadcrumbs={ false } />
				<div className='main-section container h-100 d-flex align-items-center justify-content-center p-4'>
					<Form
						className='w-50 p-4'
						onSubmit={ e =>
							this.props.accountRegisterSubmit(
								e,
								this.props.email,
								this.props.username,
								this.props.password,
								this.props.confirmPassword)
						}>
						<h3 className='text-center my-4 text-capitalize'>Make your account</h3>
						{
							this.props.error &&
							<div className='alert alert-danger text-center text-capitalize'>
								{ this.props.errorMessage }
							</div>
						}
						<InputWithIcon
							type='email'
							name='email'
							value={ this.props.email }
							placeholder='Email'
							className='form-control-lg mb-4'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						>
							<EmailIcon className='form-input-with-icon-icon' />
						</InputWithIcon>
						<InputWithIcon
							iconName={ [ 'fa', 'user' ] }
							type='text'
							name='username'
							value={ this.props.username }
							placeholder='Username'
							className='form-control-lg mb-4'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						>
							<UserIcon className='form-input-with-icon-icon' />
						</InputWithIcon>
						<InputWithIcon
							iconName={ [ 'fas', 'lock' ] }
							type='password'
							name='password'
							value={ this.props.password }
							placeholder='Password'
							className='form-control-lg mb-4'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						>
							<LockIcon className='form-input-with-icon-icon' />
						</InputWithIcon>
						<InputWithIcon
							iconName={ [ 'fas', 'check-square' ] }
							type='password'
							name='confirmPassword'
							value={ this.props.confirmPassword }
							placeholder='Confirm Password'
							className='form-control-lg mb-4'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						>
							<LockIcon className='form-input-with-icon-icon' />
						</InputWithIcon>


						<PrimaryButton fullWidth={ true } largeButton={ true }>
							Submit
						</PrimaryButton>

						<p className='text-center my-4' style={ { fontSize: '1.2em' } }>
							Already have an account? <Link to='/login' className='secondary-color'>Login</Link>
						</p>
					</Form>
				</div>
			</main>
		);
	}
}

RegisterForm.propTypes = {
	errorMessage: PropTypes.string,
	user: PropTypes.object,
	email: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	confirmPassword: PropTypes.string.isRequired,
	error: PropTypes.bool.isRequired,
	inputChange: PropTypes.func.isRequired,
	accountRegisterSubmit: PropTypes.func.isRequired,
	resetAccountInputs: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	user: state.accountReducer.user,
	email: state.accountReducer.email,
	username: state.accountReducer.username,
	password: state.accountReducer.password,
	confirmPassword: state.accountReducer.confirmPassword,
	error: state.accountReducer.error,
	errorMessage: state.accountReducer.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
	inputChange: (name, value) => dispatch(accountInputChange(name, value)),
	accountRegisterSubmit: (evt, email, username, password, confirmPassword) => {
		evt.preventDefault();
		dispatch(submitAccountRegister(email, username, password, confirmPassword));
	},
	resetAccountInputs: () => dispatch(resetAccountInputs())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);