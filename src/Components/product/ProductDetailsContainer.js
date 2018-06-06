import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/ProductDetailsContainer.css';

const sizes = [ 'Select Size', 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5 ];

class ProductDetailsContainer extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoe !== this.props.shoe) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className='w-50 d-flex flex-column py-4 justify-content-center'>
				<span className='text-center w-100 text-uppercase'>
					{ this.props.shoe.brand }
				</span>
				<h4 className='text-center w-100 mb-0 font-weight-bold text-uppercase mb-1'>
					{ this.props.shoe.model }
				</h4>
				<h3 className='text-center w-100 mb-0 font-weight-bold text-uppercase mb-0'>
					{ this.props.shoe.colorway }
				</h3>
				<hr className='product-details-hr mx-auto' />
				<strong className='product-details-price text-center'>
					${ this.props.shoe.price }
				</strong>
				<select className='mx-auto my-4 w-25'>
					{
						sizes.map(s => {
							if (s !== 'Select Size') {
								return <option key={ s }>{ s }</option>
							}
							return <option key={ s } value={ s }>{ s }</option>
						})
					}
				</select>
				<input
					className='btn btn-primary w-50 py-2 mx-auto'
					type='button'
					value='Add To Cart'
					onClick={ () => this.props.addToCart(this.props.shoe) }
				/>
			</div>
		)
	}
}

ProductDetailsContainer.propTypes = {
	shoe: PropTypes.object.isRequired,
	addToCart: PropTypes.func.isRequired
}

export default ProductDetailsContainer;