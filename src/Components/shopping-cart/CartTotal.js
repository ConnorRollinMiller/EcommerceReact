import React from 'react';
import PropTypes from 'prop-types';

const CartTotal = ({ ...props }) => (
	<strong>
		{ props.children } ${ props.total }
	</strong>
);

CartTotal.propTypes = {
	total: PropTypes.string.isRequired,
	children: PropTypes.string
}

export default CartTotal;