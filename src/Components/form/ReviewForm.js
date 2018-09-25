import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form-components/Form';
import TextArea from './form-components/TextArea';
import ReviewRating from '../review/ReviewRating';
import PrimaryButton from '../button/PrimaryButton';

import { connect } from 'react-redux';
import {
   changeReviewText,
   changeReviewRating,
   postNewReview,
   resetReviewForm
} from '../../redux/actions/reviewActions';

class ProductReviewForm extends Component {

   componentDidUpdate(prevProps) {
      if (prevProps.shoeId !== this.props.shoeId) {
         this.props.resetReviewForm();
      }
   }

   shouldComponentUpdate(nextProps) {
      if (nextProps.user !== this.props.user) return true;
      if (nextProps.reviewText !== this.props.reviewText) return true;
      if (nextProps.reviewRating !== this.props.reviewRating) return true;
      if (nextProps.shoeId !== this.props.shoeId) return true;
      if (nextProps.userId !== this.props.userId) return true;
      if (nextProps.review !== this.props.review) return true;
      if (nextProps.error !== this.props.error) return true;
      if (nextProps.errorMessage !== this.props.errorMessage) return true;
      return false;
   }

   render() {
      if (!this.props.shoeId || !this.props.user) {
         return (
            <div className='col-md-6 flex-column align-items-center mb-4'>
               <h3 className='h4 font-weight-bold text-uppercase'>
                  Add A Review
               </h3>
               <strong className='mt-2 text-capitalize'>
                  Must Be Logged In To Leave Review!
               </strong>
            </div>
         )
      }
      return (
         <div className='col-md-6 flex-column align-items-center mb-4'>
            <h3 className='h4 font-weight-bold text-uppercase'>
               Add A Review
            </h3>
            <Form
               className='col-12 my-4'
               onSubmit={ e =>
                  this.props.postNewReview(
                     e,
                     this.props.shoeId,
                     this.props.user.userId,
                     this.props.user.username,
                     this.props.reviewRating,
                     this.props.reviewText
                  )
               }
            >
               { this.props.error && (
                  <div className='mt-4 alert alert-danger'>
                     { this.props.errorMessage }
                  </div>
               ) }
               <div className='mb-2'>
                  <p className='mb-1'>Your Rating:</p>
                  <ReviewRating
                     reviewRating={ this.props.reviewRating }
                     changeReviewRating={ this.props.changeReviewRating }
                  />
               </div>
               <TextArea
                  label='Your Review:'
                  value={ this.props.reviewText }
                  onChange={ this.props.changeReviewText }
                  rows={ 4 }
               />
               <PrimaryButton className='col-12 col-md-6'>
                  Submit Review
               </PrimaryButton>
            </Form>
         </div>
      );
   }
}

ProductReviewForm.propTypes = {
   reviewRating: PropTypes.number,
   reviewText: PropTypes.string.isRequired,
   changeReviewText: PropTypes.func.isRequired,
   changeReviewRating: PropTypes.func.isRequired,
   shoeId: PropTypes.number.isRequired,
   user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
   reviewText: state.reviewReducer.reviewText,
   reviewRating: state.reviewReducer.reviewRating,
   shoeId: ownProps.shoeId,
   user: ownProps.user,
   error: state.reviewReducer.error,
   errorMessage: state.reviewReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
   changeReviewText: value => dispatch(changeReviewText(value)),
   changeReviewRating: rating => dispatch(changeReviewRating(rating)),
   postNewReview: (e, shoeId, userId, username, reviewRating, reviewText) => {
      e.preventDefault();
      dispatch(postNewReview(shoeId, userId, username, reviewRating, reviewText));
   },
   resetReviewForm: () => dispatch(resetReviewForm())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductReviewForm);
