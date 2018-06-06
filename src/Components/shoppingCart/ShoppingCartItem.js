import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './css/ShoppingCartItem.css';

class ShoppingCartItem extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoe !== this.props.shoe) {
			return true;
		}
		if (nextProps.id !== this.props.id) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className='shopping-cart-item d-flex align-items-center justify-content-stretch px-2 py-3'>
				<img
					className='img-fluid shopping-card-img'
					src={ `/${ this.props.shoe.imageFolderURL }/1.jpg` }
					alt={ `${ this.props.shoe.model } ${ this.props.shoe.colorway }` }
				/>
				<div className='d-flex flex-column mx-auto'>
					<Link className='h5 font-weight-bold mx-2 mb-0' to={ `/shop/${ this.props.shoe.shoeId }` }>
						{ this.props.shoe.model }
					</Link>
					<p className='mb-0'>${ this.props.shoe.price.toFixed(2) }</p>
				</div>
				<FontAwesomeIcon
					className='ml-2 shopping-cart-remove-icon'
					icon='times-circle'
					size='2x'
					onClick={ () => this.props.removeItemFromCart(this.props.id, this.props.shoe.price) }
				/>
			</div>
		)
	}
}

ShoppingCartItem.propTypes = {
	shoe: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
	removeItemFromCart: PropTypes.func.isRequired
}



export default ShoppingCartItem;