import {
	CartActions,
} from './actionTypes';

let cartItemId = 0;

export const addToCart = (shoe) => {
	// if (!shoe.size) return addToCartFailure('Must Select A Size');
	return addToCartSuccess(shoe);
};

const addToCartSuccess = (shoe) => ({
	type: CartActions.ADD_TO_CART_SUCCESS,
	id: cartItemId++,
	shoe
});

// const addToCartFailure = (errorMessage) => ({
// 	type: CartActions.ADD_TO_CART_FAILURE,
// 	errorMessage
// });

export const removeItemFromCart = (id, price) => ({
	type: CartActions.REMOVE_FROM_CART,
	id,
	price
});