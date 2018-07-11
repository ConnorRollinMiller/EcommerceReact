import { AccountActions } from '../actions';

const initialState = {
	user: null,
	email: '',
	username: '',
	password: '',
	confirmPassword: '',
	newUsername: '',
	newEmail: '',
	currentPassword: '',
	newPassword: '',
	confirmNewPassword: '',
	error: false,
	errorMessage: '',
	accountUserNameError: false,
	accountUserNameErrorMessage: null,
	accountEmailError: false,
	accountEmailErrorMessage: null,
	accountPasswordError: false,
	accountPasswordErrorMessage: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AccountActions.ACCOUNT_INPUT_CHANGE:
			return {
				...state,
				[ action.name ]: action.value
			};
		case AccountActions.SUBMIT_REGISTER_SUCCESS:
			return {
				...state,
				user: action.user,
				email: '',
				username: '',
				password: '',
				confirmPassword: '',
				error: false,
				errorMessage: null
			};
		case AccountActions.SUBMIT_REGISTER_FAILURE:
			return {
				...state,
				error: true,
				errorMessage: action.errorMessage
			};
		case AccountActions.SUBMIT_LOGIN_SUCCESS:
			return {
				...state,
				user: action.user,
				email: '',
				username: '',
				password: '',
				confirmPassword: '',
				error: false,
				errorMessage: null
			};
		case AccountActions.SUBMIT_LOGIN_FAILURE:
			return {
				...state,
				error: true,
				errorMessage: action.errorMessage
			};
		case AccountActions.RESET_ACCOUNT_INPUTS:
			return {
				...state,
				email: '',
				username: '',
				password: '',
				confirmPassword: '',
				newUsername: '',
				newEmail: '',
				currentPassword: '',
				newPassword: '',
				confirmNewPassword: '',
				error: false,
				errorMessage: null
			};
		case AccountActions.CHANGE_REVIEW_TEXT:
			return {
				...state,
				reviewText: action.value
			};
		case AccountActions.VERIFY_TOKEN_SUCCESS:
			return {
				...state,
				user: action.user,
				error: false,
				errorMessage: null
			};
		case AccountActions.VERIFY_TOKEN_FAILURE:
			return {
				...state,
				user: null
			};
		case AccountActions.ACCOUNT_LOGOUT:
			return {
				...state,
				user: null
			};
		case AccountActions.SUBMIT_NEW_ACCOUNT_USERNAME_SUCCESS:
			return {
				...state,
				user: action.user,
				accountUserNameError: false,
				accountUserNameErrorMessage: null
			}
		case AccountActions.SUBMIT_NEW_ACCOUNT_USERNAME_FAILURE:
			return {
				...state,
				accountUserNameError: true,
				accountUserNameErrorMessage: action.errorMessage
			}
		case AccountActions.SUBMIT_NEW_ACCOUNT_EMAIL_SUCCESS:
			return {
				...state,
				user: action.user,
				accountEmailError: false,
				accountEmailErrorMessage: null
			}
		case AccountActions.SUBMIT_NEW_ACCOUNT_EMAIL_FAILURE:
			return {
				...state,
				accountEmailError: true,
				accountEmailErrorMessage: action.errorMessage
			}
		case AccountActions.SUBMIT_NEW_ACCOUNT_PASSWORD_SUCCESS:
			return {
				...state,
				accountPasswordError: false,
				accountPasswordErrorMessage: null
			}
		case AccountActions.SUBMIT_NEW_ACCOUNT_PASSWORD_FAILURE:
			return {
				...state,
				accountPasswordError: true,
				accountPasswordErrorMessage: action.errorMessage
			}
		default:
			return state;
	}
};
