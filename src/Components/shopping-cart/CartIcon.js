import React from 'react';
import PropTypes from 'prop-types';

const CartIcon = ({ ...props }) => (
	<span id='shopping-cart-icon'>
		<strong id='shopping-cart-item-num'>
			{ props.itemNumber }
		</strong>
	</span>
);

CartIcon.propTypes = {
	itemNumber: PropTypes.number.isRequired
}

export default CartIcon;