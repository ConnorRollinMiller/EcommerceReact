import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

import convertDate from '../../utilities/convertDate';

const Review = ({ rating, username, createdAt, reviewText }) => (
   <article className='py-3 text-center text-md-left border-bottom'>
      <Rating rating={ rating } />
      <p className='mb-0 text-uppercase font-weight-bold'>
         { username }
      </p>
      <p className='mb-0'>{ convertDate(createdAt) }</p>
      <p className='mb-0 font-italic font-weight-light'>
         { reviewText }
      </p>
   </article>
);

Review.propTypes = {
   rating: PropTypes.number.isRequired,
   username: PropTypes.string.isRequired,
   createdAt: PropTypes.string.isRequired,
   reviewText: PropTypes.string.isRequired
};

export default Review;
