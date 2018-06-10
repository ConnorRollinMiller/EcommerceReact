import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuickviewButton from './QuickviewButton';
import PrimaryButton from '../button/PrimaryButton';
import './css/ProductCard.css';
import ProductCardDetails from './ProductCardDetails';

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
				<img
					className='product-card-img img-fluid py-4'
					src={ `${ this.props.shoe.ImageFolderURL }/1.jpg` }
					alt={ `${ this.props.shoe.Brand } ${ this.props.shoe.Colorway }` }
				/>
				<div className='product-card-info d-flex flex-column justify-content-center py-4'>
					<QuickviewButton
						onClickFunction={ () => this.props.showQuickview(this.props.shoe) }>
						Quickview
					</QuickviewButton>
					<ProductCardDetails shoe={ this.props.shoe } />
					{
						<PrimaryButton
							className='w-50 mx-auto mt-2'
							onClick={ () => this.props.addToCart(this.props.shoe) }>
							Add To Cart
						</PrimaryButton>
					}
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