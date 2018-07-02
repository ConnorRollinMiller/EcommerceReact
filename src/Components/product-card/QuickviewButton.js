import React from 'react';
import PropTypes from 'prop-types';

const QuickviewButton = ({ ...props }) => (
	<button
		className='product-card-quick-view-button'
		onClick={ props.onClick }>
		{ props.children }
	</button>
);

QuickviewButton.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default QuickviewButton;