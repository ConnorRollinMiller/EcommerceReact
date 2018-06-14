import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import PageTitle from '../common/PageTitle';
import PrimaryButton from '../button/PrimaryButton';
import InputWithIcon from './InputWithIcon';
import UserIcon from '../icon/UserIcon';
import LockIcon from '../icon/LockIcon';
import { Link, Redirect } from 'react-router-dom';
import './css/FormPage.css';

import { connect } from 'react-redux';
import { accountInputChange, submitAccountLogin, resetAccountInputs } from '../../redux/actions/accountActions';

class LoginForm extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.username !== this.props.username) {
			return true;
		} else if (nextProps.password !== this.props.password) {
			return true;
		} else if (nextProps.user !== this.props.user) {
			return true;
		} else if (nextProps.error !== this.props.error) {
			return true;
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
					<Form className='w-50 p-4' onSubmit={ e =>
						this.props.submitAccountLogin(
							e,
							this.props.username,
							this.props.password)
					}>
						<h3 className='text-center my-4 text-capitalize'>Log in to your account</h3>
						{
							this.props.error &&
							<div className='alert alert-danger text-center text-capitalize'>
								{ this.props.errorMessage }
							</div>
						}
						<InputWithIcon
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
							type='password'
							name='password'
							value={ this.props.password }
							placeholder='Password'
							className='form-control-lg mb-4'
							onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
						>
							<LockIcon className='form-input-with-icon-icon' />
						</InputWithIcon>

						<PrimaryButton fullWidth={ true } largeButton={ true }>
							Submit
						</PrimaryButton>

						<p className='text-center my-4' style={ { fontSize: '1.2em' } }>
							New? <Link to='/register' className='secondary-color'>Sign Up</Link>
						</p>
					</Form>
				</div>
			</main>
		);
	}
}

LoginForm.propTypes = {
	errorMessage: PropTypes.string,
	user: PropTypes.object,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	error: PropTypes.bool.isRequired,
	inputChange: PropTypes.func.isRequired,
	submitAccountLogin: PropTypes.func.isRequired,
	resetAccountInputs: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	user: state.accountReducer.user,
	username: state.accountReducer.username,
	password: state.accountReducer.password,
	error: state.accountReducer.error,
	errorMessage: state.accountReducer.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
	inputChange: (name, value) => dispatch(accountInputChange(name, value)),
	submitAccountLogin: (e, username, password) => {
		e.preventDefault();
		dispatch(submitAccountLogin(username, password));
	},
	resetAccountInputs: () => dispatch(resetAccountInputs())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);