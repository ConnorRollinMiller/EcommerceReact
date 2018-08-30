import axios from 'axios';
import {
   ShoeActions,
   Filters
} from './index';

const apiUrl = 'http://localhost:8080/api/shoes';

export const fetchShoes = () => {
   return dispatch => {
      axios.get(apiUrl)
         .then(res => {
            dispatch(fetchShoesSuccess(res.data.shoes));
            dispatch(setShoeFilter(Filters.SHOW_FEATURED));
         })
         .catch(err => {
            (err.response);
            dispatch(fetchShoesFailed(err.response));
         });
   }
}

const fetchShoesSuccess = (shoes) => ({
   type: ShoeActions.FETCH_SHOES_SUCCESS,
   shoes
});

const fetchShoesFailed = (err) => ({
   type: ShoeActions.FETCH_SHOES_FAILED,
   err
});

export const fetchShoeById = (id) => {
   return dispatch => {
      axios.get(`${ apiUrl }/${ id }`)
         .then(res => {
            console.log(res)
            dispatch(fetchShoeByIdSuccess(res.data.shoe, res.data.reviews));
         })
         .catch(err => {
            console.error(err)
            console.error(err.response)
            dispatch(fetchShoeByIdFailed(err.response));
         });
   }
}

const fetchShoeByIdSuccess = (shoe, reviews) => ({
   type: ShoeActions.FETCH_SHOE_BY_ID_SUCCESS,
   shoe,
   reviews
});

const fetchShoeByIdFailed = (err) => ({
   type: ShoeActions.FETCH_SHOE_BY_ID_FAILED,
   err
});

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

export const changeActiveShoeImage = (shoeImageId) => ({
   type: ShoeActions.CHANGE_ACTIVE_SHOE_IMAGE,
   shoeImageId
});