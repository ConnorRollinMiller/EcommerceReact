import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/ProductImageContainer.css';
import ProductImageThumbnail from './ProductImageThumbnail';

const imageIdArr = [ 1, 2, 3, 4 ];

class ProductImageContainer extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoe !== this.props.shoe) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className='w-50 d-flex flex-column justify-content-center align-items-center py-4'>
				<img
					className='product-image-container img-fluid'
					src={ `/${ this.props.shoe.ImageFolderURL }/1.jpg` }
					alt={ `${ this.props.shoe.Brand } ${ this.props.shoe.Colorway }` }
				/>
				<div className='d-flex justify-content-center align-items-center my-2'>
					{
						imageIdArr.map(id =>
							<ProductImageThumbnail
								key={ id }
								brand={ this.props.shoe.Brand }
								imageFolderURL={ this.props.shoe.ImageFolderURL }
								colorway={ this.props.shoe.Colorway }
								imageId={ id }
							/>
						)
					}
				</div>
			</div>
		)
	}
}

ProductImageContainer.propTypes = {
	shoe: PropTypes.object.isRequired
}

export default ProductImageContainer;