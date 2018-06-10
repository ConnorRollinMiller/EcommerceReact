import { CheckoutActions } from '../actions/actionTypes';

export const inputChange = (name, value) => ({
	type: CheckoutActions.INPUT_CHANGE,
	name,
	value
});