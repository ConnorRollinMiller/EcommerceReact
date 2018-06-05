import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/cartActions';
import './css/ShoppingCartItem.css';

const ShoppingCartItem = ({ ...props }) => (
	<div className='shopping-cart-item d-flex align-items-center justify-content-stretch px-2 py-3'>
		<img
			className='img-fluid shopping-card-img'
			src={ `/${ props.shoe.imageFolderURL }/1.jpg` }
			alt={ `${ props.shoe.model } ${ props.shoe.colorway }` } />
		<div className='d-flex flex-column mx-auto'>
			<Link className='h5 font-weight-bold mx-2 mb-0' to={ `/shop/${ props.shoe.shoeId }` }>
				{ props.shoe.model }
			</Link>
			<p className='mb-0'>${ props.shoe.price.toFixed(2) }</p>
		</div>
		<FontAwesome
			className='ml-2 shopping-cart-remove-icon'
			name='times-circle'
			size='2x'
			onClick={ () => props.removeItemFromCart(props.id, props.shoe.price) }
		/>
	</div>
);

ShoppingCartItem.propTypes = {
	shoe: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
	removeItemFromCart: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	removeItemFromCart: (id, price) => dispatch(removeItemFromCart(id, price))
});

export default connect(null, mapDispatchToProps)(ShoppingCartItem);