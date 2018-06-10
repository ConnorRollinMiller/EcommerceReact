import React from 'react';
import PropTypes from 'prop-types';

const QuickviewButton = ({ ...props }) => (
	<button
		className='product-card-quick-view'
		onClick={ props.onClickFunction }>
		{ props.children }
	</button>
);

QuickviewButton.propTypes = {
	children: PropTypes.string.isRequired,
	onClickFunction: PropTypes.func.isRequired
}

export default QuickviewButton;