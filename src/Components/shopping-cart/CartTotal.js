import React from 'react';
import PropTypes from 'prop-types';

const CartTotal = ({ ...props }) => (
	<strong>
		<span>Total:</span> ${ props.total }
	</strong>
);

CartTotal.propTypes = {
	total: PropTypes.string.isRequired,
	children: PropTypes.string
}

export default CartTotal;