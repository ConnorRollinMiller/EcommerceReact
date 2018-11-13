import {
   ShoeActions,
   Filters
} from '../actions';

const initialState = {
   shoes: [],
   shoe: null,
   filter: Filters.SHOW_ALL,
   error: false,
   errorMessage: null,
   quickviewShoe: null,
   quickviewOpen: false,
   activeShoeImage: 1,
   isLoading: true
};

export default (state = initialState, action) => {
   switch (action.type) {
      case ShoeActions.FETCH_SHOE_START:
         return {
            ...state,
            isLoading: true,
            error: null,
            errorMessage: null
         }
      case ShoeActions.FETCH_SHOES_SUCCESS:
         return {
            ...state,
            shoes: action.shoes,
            error: false,
            errorMessage: null,
            isLoading: false
         }
      case ShoeActions.FETCH_SHOES_FAILED:
         return {
            ...state,
            error: true,
            errorMessage: action.err,
            isLoading: false
         }
      case ShoeActions.SET_SHOE_FILTER:
         return {
            ...state,
            filter: action.filter
         }
      case ShoeActions.FETCH_SHOE_BY_ID_SUCCESS:
         return {
            ...state,
            shoe: action.shoe,
            reviews: action.reviews,
            error: false,
            errorMessage: null,
            isLoading: false,
            activeShoeImage: 1
         }
      case ShoeActions.FETCH_SHOE_BY_ID_FAILED:
         return {
            ...state,
            error: true,
            errorMessage: action.err,
            isLoading: false
         }
      case ShoeActions.SHOW_QUICKVIEW:
         return {
            ...state,
            quickviewShoe: action.shoe,
            quickviewOpen: true,
            activeShoeImage: 1
         }
      case ShoeActions.CLOSE_QUICKVIEW:
         return {
            ...state,
            quickviewShoe: null,
            quickviewOpen: false,
            activeShoeImage: 1
         }
      case ShoeActions.SET_SHOE_SIZE:
         return {
            ...state,
            quickviewShoe: {
               ...state.quickviewShoe,
               size: action.size
            }
         }
      case ShoeActions.CHANGE_ACTIVE_SHOE_IMAGE:
         return {
            ...state,
            activeShoeImage: action.shoeImageId
         }
      default:
         return state;
   }
}