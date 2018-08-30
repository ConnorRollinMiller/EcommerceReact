import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

class ReviewList extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.reviews.length !== this.props.reviews.length) return true;
      return false;
   }

   render() {
      return (
         <div className='col-md-6 flex-column align-items center mb-4'>
            <h3 className='h4 font-weight-bold text-uppercase'>
               Reviews ({ this.props.reviews.length })
            </h3>
            {
               this.props.reviews && this.props.reviews.length > 0 ? (
                  <div className='my-4'>
                     {
                        this.props.reviews.map(r =>
                           <Review
                              key={ r.reviewId }
                              rating={ r.rating }
                              username={ r.username }
                              createdAt={ r.createdAt }
                              reviewText={ r.reviewText }
                           />
                        )
                     }
                  </div>
               ) : (
                     <strong className='py-2 text-capitalize'>
                        No Reviews
                     </strong>
                  )
            }
         </div>
      );
   }
}

ReviewList.propTypes = {
   reviews: PropTypes.array.isRequired
}

export default ReviewList;
