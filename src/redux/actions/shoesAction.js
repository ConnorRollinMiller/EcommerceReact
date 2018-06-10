import axios from 'axios';
import {
	ShoeActions,
	Filters
} from './actionTypes';

const apiUrl = 'http://localhost:8080/api/shoes';

const fetchShoesSuccess = (shoes) => ({
	type: ShoeActions.FETCH_SHOES_SUCCESS,
	shoes
});

const fetchShoesFailed = (err) => ({
	type: ShoeActions.FETCH_SHOES_FAILED,
	err
})

export const fetchShoes = () => {
	return dispatch => {
		axios.get(apiUrl)
			.then(res => {
				dispatch(fetchShoesSuccess(res.data));
				dispatch(setShoeFilter(Filters.SHOW_FEATURED));
			})
			.catch(err => {
				console.log(err.response);
				dispatch(fetchShoesFailed(err));
			});
	}
}

const fetchShoeByIdSuccess = (shoe) => ({
	type: ShoeActions.FETCH_SHOE_BY_ID_SUCCESS,
	shoe
});

const fetchShoeByIdFailed = (err) => ({
	type: ShoeActions.FETCH_SHOE_BY_ID_FAILED,
	err
});

export const fetchShoeById = (id) => {
	return dispatch => {
		axios.get(`${ apiUrl }/${ id }`)
			.then(res => {
				dispatch(fetchShoeByIdSuccess(res.data));
			})
			.catch(err => {
				dispatch(fetchShoeByIdFailed(err.response.data));
			});
	}
}

export const setShoeFilter = (filter) => ({
	type: ShoeActions.SET_SHOE_FILTER,
	filter
});

export const showQuickview = (shoe) => ({
	type: ShoeActions.SHOW_QUICKVIEW,
	shoe
});

export const closeQuickview = () => ({
	type: ShoeActions.CLOSE_QUICKVIEW
});

export const setShoeSize = (size) => ({
	type: ShoeActions.SET_SHOE_SIZE,
	size
});