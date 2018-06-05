import React from 'react';
import PropTypes from 'prop-types';
import ShoeSizeButton from './ShoeSizeButton';
import './css/ProductDetailsContainer.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const sizes1 = [ 8, 8.5, 9, 9.5 ]
const sizes2 = [ 10, 10.5, 11, 11.5 ];

const ProductDetailsContainer = ({ ...props }) => (
	<div className='w-50 d-flex flex-column py-4 justify-content-center'>
		<span className='text-center text-uppercase'>{ props.shoe.brand }</span>
		<h4 className='text-center w-100 mb-0 font-weight-bold text-uppercase mb-1'>{ props.shoe.model }</h4>
		<h3 className='text-center w-100 mb-0 font-weight-bold text-uppercase mb-0'>{ props.shoe.colorway }</h3>
		<hr className='product-details-hr mx-auto' />
		<strong className='product-details-price text-center'>${ props.shoe.price }</strong>
		<div className='d-flex justify-content-center mt-4'>
			{ sizes1.map(s => <ShoeSizeButton key={ s } size={ s } />) }
		</div>
		<div className='d-flex justify-content-center mb-4'>
			{ sizes2.map(s => <ShoeSizeButton key={ s } size={ s } />) }
		</div>
		<input
			className='btn btn-primary w-50 py-2 mx-auto'
			type='button'
			value='Add To Cart'
			onClick={ () => props.addToCart(props.shoe) }
		/>
	</div>
);

ProductDetailsContainer.propTypes = {
	shoe: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (shoe) => dispatch(addToCart(shoe))
	}
}

export default connect(null, mapDispatchToProps)(ProductDetailsContainer);