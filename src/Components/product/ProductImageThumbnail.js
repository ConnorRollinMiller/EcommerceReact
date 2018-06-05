import React from 'react';
import PropTypes from 'prop-types';

const ProductImageThumnail = ({ ...props }) => (
	<div className='product-image-thumbnail m-3 w-25'>
		<img
			className='w-100'
			src={ `/${ props.imageFolderURL }/${ props.imageId }.jpg` }
			alt={ `${ props.brand } ${ props.colorway } 1` }
		/>
	</div>
);

ProductImageThumnail.propTypes = {
	brand: PropTypes.string.isRequired,
	imageFolderURL: PropTypes.string.isRequired,
	colorway: PropTypes.string.isRequired,
	imageId: PropTypes.number.isRequired
}

export default ProductImageThumnail;