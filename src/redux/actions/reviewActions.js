import { ReviewActions } from '../actions';
import axios from 'axios';
import NewReviewDTO from '../../utilities/NewReviewDTO';

const API_ROUTE = '/api/reviews';

export const fetchReviewsByShoeId = shoeId => {
   return dispatch => {
      axios
         .get(`${ API_ROUTE }/${ shoeId }`)
         .then(res => {
            console.log('RESPONSE:', res.data);
            if (res.data.reviews.length > 0 && res.data.success) {
               dispatch(fetchReviewsByShoeIdSuccess(res.data.reviews));
            } else {
               dispatch(resetReviews());
            }
         })
         .catch(err => {
            console.error('ERROR:', err.response);

            dispatch(fetchReviewsByShoeIdFailure(err.response));
         });
   };
};

const fetchReviewsByShoeIdSuccess = reviews => ({
   type: ReviewActions.GET_REVIEWS_BY_SHOEID_SUCCESS,
   reviews
});

const fetchReviewsByShoeIdFailure = errorMessage => ({
   type: ReviewActions.GET_REVIEWS_BY_SHOEID_FAILURE,
   errorMessage
});

export const resetReviews = () => ({
   type: ReviewActions.RESET_REVIEWS
});

export const changeReviewRating = rating => ({
   type: ReviewActions.CHANGE_REVIEW_RATING,
   rating
});

export const changeReviewText = value => ({
   type: ReviewActions.CHANGE_REVIEW_TEXT,
   value
});

export const postNewReview = (shoeId, userId, username, rating, reviewText) => {
   return dispatch => {
      if (!rating) return dispatch(postNewReviewFailure('Must Give A Rating.'));
      if (!reviewText) return dispatch(postNewReviewFailure('Must Give A Review.'));
      if (!shoeId) return dispatch(postNewReviewFailure('No Shoe ID Provided.'));
      if (!username) return dispatch(postNewReviewFailure('Must Be Logged In To Leave Review.'));

      const newReview = NewReviewDTO(shoeId, userId, username, reviewText, rating);

      axios
         .post(`${ API_ROUTE }`, newReview)
         .then(res => {
            console.log(res.data);
            dispatch(postNewReviewSuccess(res.data.newReview));
         })
         .catch(err => {
            console.log('ERROR:', err.response);
            dispatch(postNewReviewFailure(err.response));
         });
   };
};

const postNewReviewSuccess = newReview => ({
   type: ReviewActions.POST_NEW_REVIEW_SUCCESS,
   newReview
});

const postNewReviewFailure = errorMessage => ({
   type: ReviewActions.POST_NEW_REVIEW_FAILURE,
   errorMessage
});

export const resetReviewForm = () => ({
   type: ReviewActions.RESET_REVIEW_FORM
});
