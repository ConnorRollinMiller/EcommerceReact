import { AccountActions } from '../actions/index';
import { APP_URL } from '../../AppConstants';
import axios from 'axios';

const ROUTE_URL = 'api/users';

export const accountInputChange = (name, value) => ({
	type: AccountActions.ACCOUNT_INPUT_CHANGE,
	name,
	value
});

export const submitAccountRegister = (email, username, password, confirmPassword) => {
	return dispatch => {
		if (!email) {
			return dispatch(submitAccountLoginFailure('Email Is Required!'));
		} else if (!username) {
			return dispatch(submitAccountLoginFailure('Username Is Required!'));
		} else if (username.length < 4) {
			return dispatch(submitAccountLoginFailure('Username Must Be 4 Or More Characters.'))
		} else if (!password || !confirmPassword) {
			return dispatch(submitAccountLoginFailure('Password / Confirm Password are Required!'));
		} else if (password.length < 4) {
			return dispatch(submitAccountLoginFailure('Password Must Be 4 Or More Characters.'))
		} else if (password !== confirmPassword) {
			return dispatch(submitAccountRegisterFailure(`Passwords Don't Match!`));
		}

		const newUser = {
			Email: email,
			UserName: username,
			Password: password
		}

		axios.post(`${ APP_URL }/${ ROUTE_URL }/register`, newUser)
			.then(res => {
				console.log('RESPONSE:', res);
				console.log('RESPONSE STATUS:', res.status);
				if (res.status === 200) {
					dispatch(submitAccountRegisterSuccess(res.data.user));
				} else {
					dispatch(submitAccountRegisterFailure(res.message))
				}
			})
			.catch(err => {
				console.log('ERROR:', err);
				dispatch(submitAccountRegisterFailure(err.response));
			});
	}
};

const submitAccountRegisterSuccess = (user) => ({
	type: AccountActions.SUBMIT_REGISTER_SUCCESS,
	user
});

const submitAccountRegisterFailure = (errorMessage) => ({
	type: AccountActions.SUBMIT_REGISTER_FAILURE,
	errorMessage
});

export const submitAccountLogin = (username, password) => {
	return dispatch => {

		if (!username) {
			return dispatch(submitAccountLoginFailure('Username Is Required!'));
		} else if (!password) {
			return dispatch(submitAccountLoginFailure('Password Is Required!'));
		} else if (username.length < 4 || password.length < 4) {
			return dispatch(submitAccountLoginFailure('User Name Or Password Is Incorrect.'))
		}

		const user = {
			UserName: username,
			Password: password
		}

		axios.post(`${ APP_URL }/${ ROUTE_URL }/login`, user)
			.then(res => {
				console.log('RESPONSE:', res);
				console.log('STATUS:', res.status);
				dispatch(submitAccountLoginSuccess(res.data.user));

			})
			.catch(err => {
				console.log('ERROR:', err);
				console.log(err.response);
				dispatch(submitAccountLoginFailure(err.response.data.message));
			})
	}
}

const submitAccountLoginSuccess = (user) => ({
	type: AccountActions.SUBMIT_LOGIN_SUCCESS,
	user
});

const submitAccountLoginFailure = (errorMessage) => ({
	type: AccountActions.SUBMIT_LOGIN_FAILURE,
	errorMessage
});

export const resetAccountInputs = () => ({
	type: AccountActions.RESET_ACCOUNT_INPUTS
});