import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/ProductCard.css';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const ProductCard = ({ ...props }) => (
	<article className='product-card d-flex flex-column justify-content-end text-center' >
		{ props.new && <div className='product-card-new-badge'>
			New
		</div> }
		<img
			className='product-card-img img-fluid py-4'
			src={ `${ props.shoe.imageFolderURL }/1.jpg` }
			alt={ `${ props.shoe.brand } ${ props.shoe.colorway }` }
		/>
		<div className='product-card-info d-flex flex-column justify-content-center text-center py-4'>
			<button className='product-card-quick-view'>
				Quick View
			</button>
			<span className='product-card-brand text-uppercase text-white-50'>
				{ props.shoe.brand }
			</span>
			<Link to={ `/shop/${ props.shoe.shoeId }` }>
				<h4 className='product-card-title text-uppercase h5 text-truncate my-2'>
					{ props.shoe.colorway }
				</h4>
			</Link>
			<span className='product-card-price mb-3'>
				${ props.shoe.price.toFixed(2) }
			</span>
			<button className='btn btn-primary m-auto w-50' onClick={ () => props.addToCart(props.shoe) }>
				Add To Cart
			</button>
		</div>
	</article>
);

ProductCard.propTypes = {
	shoe: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: shoe => dispatch(addToCart(shoe))
	}
}

export default connect(null, mapDispatchToProps)(ProductCard);