import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

class ReviewList extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.reviews !== this.props.reviews) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div className="my-4">
            {this.props.reviews.map(r => (
               <Review key={r.ReviewId} review={r} />
            ))}
         </div>
      );
   }
}

ReviewList.propTypes = {
   reviews: PropTypes.array.isRequired
};

export default ReviewList;
