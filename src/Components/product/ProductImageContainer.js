import React from 'react';
import PropTypes from 'prop-types';
import './css/ProductImageContainer.css';
import ProductImageThumbnail from './ProductImageThumbnail';

const ProductImageContainer = ({ ...props }) => (
	<div className='w-50 d-flex flex-column justify-content-center align-items-center py-4'>
		<img
			className='img-fluid'
			src={ `/${ props.shoe.imageFolderURL }/1.jpg` }
			alt={ `${ props.shoe.brand } ${ props.shoe.colorway }` }
		/>
		<div className='d-flex justify-content-center align-items-center my-2'>
			<ProductImageThumbnail
				brand={ props.shoe.brand }
				imageFolderURL={ props.shoe.imageFolderURL }
				colorway={ props.shoe.colorway }
				imageId={ 1 }
			/>
			<ProductImageThumbnail
				brand={ props.shoe.brand }
				imageFolderURL={ props.shoe.imageFolderURL }
				colorway={ props.shoe.colorway }
				imageId={ 2 }
			/>
			<ProductImageThumbnail
				brand={ props.shoe.brand }
				imageFolderURL={ props.shoe.imageFolderURL }
				colorway={ props.shoe.colorway }
				imageId={ 3 }
			/>
			<ProductImageThumbnail
				brand={ props.shoe.brand }
				imageFolderURL={ props.shoe.imageFolderURL }
				colorway={ props.shoe.colorway }
				imageId={ 4 }
			/>
		</div>
	</div>
);

ProductImageContainer.propTypes = {
	shoe: PropTypes.object.isRequired
}

export default ProductImageContainer;