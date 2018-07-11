import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarIcon from '../icon/StarIcon';
import './css/ReviewRating.css';

class ReviewRating extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.reviewRating !== this.props.reviewRating) return true;
      return false;
   }

   render() {
      return (
         <div className='d-flex flex-column flex-sm-row justify-content-center'>
            <div
               className={
                  this.props.reviewRating === 1
                     ? ' d-flex justify-content-center review-rating-active review-rating m-2'
                     : ' d-flex justify-content-center review-rating m-2'
               }
               onClick={() => this.props.changeReviewRating(1)}
            >
               <StarIcon />
            </div>
            <div
               className={
                  this.props.reviewRating === 2
                     ? ' d-flex justify-content-center review-rating-active review-rating m-2'
                     : ' d-flex justify-content-center review-rating m-2'
               }
               onClick={() => this.props.changeReviewRating(2)}
            >
               <StarIcon />
               <StarIcon />
            </div>
            <div
               className={
                  this.props.reviewRating === 3
                     ? 'd-flex justify-content-center review-rating-active review-rating m-2'
                     : 'd-flex justify-content-center review-rating m-2'
               }
               onClick={() => this.props.changeReviewRating(3)}
            >
               <StarIcon />
               <StarIcon />
               <StarIcon />
            </div>
            <div
               className={
                  this.props.reviewRating === 4
                     ? 'd-flex justify-content-center review-rating-active review-rating m-2'
                     : 'd-flex justify-content-center review-rating m-2'
               }
               onClick={() => this.props.changeReviewRating(4)}
            >
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarIcon />
            </div>
            <div
               className={
                  this.props.reviewRating === 5
                     ? 'd-flex justify-content-center review-rating-active review-rating m-2'
                     : 'd-flex justify-content-center review-rating m-2'
               }
               onClick={() => this.props.changeReviewRating(5)}
            >
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarIcon />
            </div>
         </div>
      );
   }
}

ReviewRating.propTypes = {
   reviewRating: PropTypes.number,
   changeReviewRating: PropTypes.func.isRequired
};

export default ReviewRating;
