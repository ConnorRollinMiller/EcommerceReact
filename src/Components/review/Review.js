import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

import convertDate from '../../utilities/convertDate';

class Review extends Component {

   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <article className='py-3 text-center text-md-left border-bottom'>
            <Rating rating={ this.props.review.Rating } />
            <p className='mb-0 text-uppercase font-weight-bold'>
               { this.props.review.UserName }
            </p>
            <p className='mb-0'>{ convertDate(this.props.review.ReviewDate) }</p>
            <p className='mb-0 font-italic font-weight-light'>
               { this.props.review.ReviewText }
            </p>
         </article>
      )
   }
}

Review.propTypes = {
   review: PropTypes.object.isRequired
};

export default Review;
