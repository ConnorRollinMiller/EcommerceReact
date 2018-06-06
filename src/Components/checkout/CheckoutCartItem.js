import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './css/CheckoutCartItem.css';

class CheckoutCartItem extends Component {


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
			<div className='d-flex align-items-center my-2'>
				<FontAwesomeIcon
					className='checkout-cart-item-icon mr-4'
					icon='times-circle'
					size='2x'
					onClick={ () => this.props.removeFromCart(this.props.id, this.props.shoe.price) }
				/>
				<img
					className='checkout-cart-item-img img-fluid rounded p-2'
					src={ `${ this.props.shoe.imageFolderURL }/1.jpg` }
					alt={ `${ this.props.shoe.model } ${ this.props.shoe.colorway }` }
				/>
				<div className='d-flex flex-column align-items-center mx-auto'>
					<Link to={ `/shop/${ this.props.shoe.shoeId }` } className='text-uppercase text-center'>
						<span>
							{ this.props.shoe.brand } { this.props.shoe.model }
						</span>
						<h5>
							{ this.props.shoe.colorway }
						</h5>
					</Link>
				</div>
				<strong className='secondary-color'>${ this.props.shoe.price.toFixed(2) }</strong>
			</div>
		)
	}
}

CheckoutCartItem.propTypes = {
	id: PropTypes.number.isRequired,
	shoe: PropTypes.object.isRequired,
	removeFromCart: PropTypes.func.isRequired
}

export default CheckoutCartItem;