import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/ProductCard.css';

class ProductCard extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoe !== this.props.shoe) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<article className='product-card d-flex flex-column justify-content-end text-center' >
				{ this.props.new && <div className='product-card-new-badge'>
					New
			</div> }
				<img
					className='product-card-img img-fluid py-4'
					src={ `${ this.props.shoe.imageFolderURL }/1.jpg` }
					alt={ `${ this.props.shoe.brand } ${ this.props.shoe.colorway }` }
				/>
				<div className='product-card-info d-flex flex-column justify-content-center text-center py-4'>
					<button className='product-card-quick-view' onClick={ () => this.props.showQuickview(this.props.shoe) }>
						Quick View
				</button>
					<span className='product-card-brand text-uppercase text-white-50'>
						{ this.props.shoe.brand }
					</span>
					<Link to={ `/shop/${ this.props.shoe.shoeId }` }>
						<h4 className='product-card-title text-uppercase h5 text-truncate my-2'>
							{ this.props.shoe.colorway }
						</h4>
					</Link>
					<span className='product-card-price mb-3'>
						${ this.props.shoe.price.toFixed(2) }
					</span>
					<button className='btn btn-primary m-auto w-50' onClick={ () => this.props.addToCart(this.props.shoe) }>
						Add To Cart
				</button>
				</div>
			</article>
		);
	}
}

ProductCard.propTypes = {
	shoe: PropTypes.object.isRequired,
	addToCart: PropTypes.func.isRequired,
	showQuickview: PropTypes.func.isRequired
}

export default ProductCard;