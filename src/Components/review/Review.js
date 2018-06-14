import React from 'react';
// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const Review = ({ ...props }) => (
	<article className='my-2 py-4'>
		<Rating rating={ props.review.Rating } />
		<strong >{ props.review.UserName }</strong>
		<p className='mb-0 font-italic font-weight-light'>{ props.review.ReviewText }</p>
		<small>{ props.review.ReviewDate }</small>
	</article>
);

Review.propTypes = {
	review: PropTypes.object.isRequired
}

export default Review