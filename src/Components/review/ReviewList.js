import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = ({ ...props }) => (
   <div className='my-4'>
      { props.reviews.map(r => <Review key={ r.ReviewId } review={ r } />) }
   </div>
);

ReviewList.propTypes = {
   reviews: PropTypes.array.isRequired
};

export default ReviewList;
