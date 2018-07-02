import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '../icon/StarIcon';
import StarOutlineIcon from '../icon/StartOutlineIcon';

const Rating = ({ ...props }) => {
   switch (props.rating) {
      case 0:
         return (
            <div className="d-flex mb-2 secondary-color">
               <StarOutlineIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
            </div>
         );
      case 1:
         return (
            <div className="d-flex mb-2 secondary-color">
               <StarIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
            </div>
         );
      case 2:
         return (
            <div className="d-flex mb-2 secondary-color">
               <StarIcon />
               <StarIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
            </div>
         );
      case 3:
         return (
            <div className="d-flex mb-2 secondary-color">
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarOutlineIcon />
               <StarOutlineIcon />
            </div>
         );
      case 4:
         return (
            <div className="d-flex mb-2 secondary-color">
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarOutlineIcon />
            </div>
         );
      case 5:
         return (
            <div className="d-flex mb-2 secondary-color">
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarIcon />
               <StarIcon />
            </div>
         );
      default:
         return 'Error with rating => ' + props.rating;
   }
};

Rating.propTypes = {
   rating: PropTypes.number.isRequired
};

export default Rating;
