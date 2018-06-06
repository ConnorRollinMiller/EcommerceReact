import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/ProductQuickview.css';

const sizes = [ 'Select Size', 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5 ]

class ProductQuickview extends Component {
	render() {
		return (
			<article className='d-flex justify-content-center align-items-center quickview-popup'>
				<div className='w-50 p-4'>
					<div className='quickview-product-container rounded'>
						<FontAwesomeIcon
							className='quickview-icon secondary-color'
							icon='times-circle'
							size='3x'
							onClick={ () => this.props.closeQuickview() }
						/>
						<img
							className='img-fluid w-50'
							src={ `${ this.props.shoe.imageFolderURL }/1.jpg` }
							alt={ `${ this.props.shoe.model } ${ this.props.shoe.colorway }` }
						/>
						<div className='w-50 d-flex flex-column'>
							<span className='text-center text-uppercase'>
								{ this.props.shoe.brand }
							</span>
							<h4 className='text-center mb-0 font-weight-bold text-uppercase mb-1'>
								{ this.props.shoe.model }
							</h4>
							<h3 className='text-center mb-0 font-weight-bold text-uppercase mb-0'>
								{ this.props.shoe.colorway }
							</h3>
							<hr className='product-details-hr mx-auto' />
							<strong className='product-details-price text-center'>
								${ this.props.shoe.price }
							</strong>
							<select className='mx-auto my-4 w-50'>
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
								onClick={
									() => {
										this.props.addToCart(this.props.shoe)
										this.props.closeQuickview()
									}
								}
							/>
						</div>
					</div>
				</div>
			</article>
		)
	}
}

ProductQuickview.propTypes = {
	addToCart: PropTypes.func.isRequired,
	closeQuickview: PropTypes.func.isRequired,
	shoe: PropTypes.object.isRequired
}

export default ProductQuickview;