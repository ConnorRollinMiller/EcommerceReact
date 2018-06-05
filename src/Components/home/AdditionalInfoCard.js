import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './css/AdditionalInfoCard.css';

const AdditionalInfoCard = ({ ...props }) => (
	<article className='additional-info-card d-flex flex-column justify-content-center align-items-center py-4'>
		<FontAwesome className='mb-3 info-card-icon' name={ props.iconName } size='4x' />
		<h4 className='mb-2 text-uppercase text-center font-weight-bold'>{ props.title }</h4>
		<p className='mb-0 text-center'>{ props.text }</p>
	</article>
);

AdditionalInfoCard.propTypes = {
	iconName: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default AdditionalInfoCard;