import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductImageThumnail extends Component {
	render() {
		return (
			<div className='product-image-thumbnail m-3 w-25'>
				<img
					className='w-100'
					src={ `/${ this.props.imageFolderURL }/${ this.props.imageId }.jpg` }
					alt={ `${ this.props.brand } ${ this.props.colorway } 1` }
				/>
			</div>
		);
	}
}

ProductImageThumnail.propTypes = {
	brand: PropTypes.string.isRequired,
	imageFolderURL: PropTypes.string.isRequired,
	colorway: PropTypes.string.isRequired,
	imageId: PropTypes.number.isRequired
}

export default ProductImageThumnail;