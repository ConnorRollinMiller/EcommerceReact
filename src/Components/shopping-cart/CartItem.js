import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../icon/CloseIcon';
import { Link } from 'react-router-dom';
import './css/CartItem.css';

const CartItem = ({ ...props }) => (
	<div className='shopping-cart-item d-flex align-items-center justify-content-between px-2 py-3 text-uppercase'>
		<img
			className='img-fluid shopping-card-img'
			src={ `/${ props.shoe.ImageFolderURL }/1.jpg` }
			alt={ `${ props.shoe.Model } ${ props.shoe.Colorway }` }
		/>
		<div className='text-center text-truncate px-2'>
			<Link className='h5 font-weight-bold' to={ `/shop/${ props.shoe.ShoeId }` }>
				<p className='mb-0 text-truncate '>{ props.shoe.Model }</p>
				<p className='mb-0 text-truncate '>{ props.shoe.Colorway }</p>
			</Link>
			<p className='mb-0 font-weight-bold'>${ props.shoe.Price.toFixed(2) }</p>
		</div>
		<CloseIcon
			className='ml-2 shopping-cart-remove-icon'
			size='2x'
			onClick={ () => props.removeFromCart(props.id, props.shoe.Price) }
		/>
	</div >
)

CartItem.propTypes = {
	shoe: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

export default CartItem;