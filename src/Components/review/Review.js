import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

import convertDate from '../../utilities/convertDate';

const Review = ({ ...props }) => (
   <article className="py-3 text-left border-bottom">
      <Rating rating={props.review.Rating} />
      <p className="mb-0">
         <span className="text-uppercase font-weight-bold">
            {props.review.UserName}
         </span>{' '}
         - {convertDate(props.review.ReviewDate)}
      </p>
      <p className="mb-0 font-italic font-weight-light">
         {props.review.ReviewText}
      </p>
   </article>
);

Review.propTypes = {
   review: PropTypes.object.isRequired
};

export default Review;
