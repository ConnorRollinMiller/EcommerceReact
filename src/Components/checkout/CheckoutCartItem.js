import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './css/CheckoutCartItem.css';

const CheckoutCartItem = ({ ...props }) => (
	<div className='d-flex align-items-center my-2'>
		<FontAwesome
			className='checkout-cart-item-icon mr-4'
			name='times-circle'
			size='2x'
			onClick={ () => props.removeFromCart(props.id, props.shoe.price) }
		/>
		<img
			className='checkout-cart-item-img img-fluid rounded p-2'
			src={ `${ props.shoe.imageFolderURL }/1.jpg` }
			alt={ `${ props.shoe.model } ${ props.shoe.colorway }` }
		/>
		<div className='d-flex flex-column align-items-center mx-auto'>
			<Link to={ `/shop/${ props.shoe.shoeId }` }>
				<span className='text-uppercase text-center'>{ props.shoe.brand } { props.shoe.model }</span>
				<h5 className=' text-uppercase text-center mb-0'>{ props.shoe.colorway }</h5>
			</Link>
		</div>
		<strong className='secondary-color'>${ props.shoe.price.toFixed(2) }</strong>
	</div>
);

CheckoutCartItem.propTypes = {
	id: PropTypes.number.isRequired,
	shoe: PropTypes.object.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

export default CheckoutCartItem;