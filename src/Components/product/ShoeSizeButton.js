import React from 'react';
import PropTypes from 'prop-types';
import './css/ShoeSizeButton.css';

const ShoeSizeButton = ({ ...props }) => (
	<button className='shoe-size-button rounded'>
		{ props.size }
	</button>
);

ShoeSizeButton.propTypes = {
	size: PropTypes.number.isRequired
}

export default ShoeSizeButton;