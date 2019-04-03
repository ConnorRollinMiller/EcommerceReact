import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/ProductImage.css';
import ProductImageThumbnail from './ProductImageThumbnail';

const imageIdArr = [ 1, 2, 3, 4 ];

class ProductImage extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.shoe !== this.props.shoe) return true;
      if (nextProps.activeShoeImage !== this.props.activeShoeImage) return true;

      return false;

   }

   render() {
      return (
         <div className='col-md-6 d-flex flex-column justify-content-center align-items-center mb-4'>
            <img
               className='product-image-container img-fluid mb-4'
               src={ `/images/${ this.props.shoe.brand }/${ this.props.shoe.imageFolderName }/${
                  this.props.activeShoeImage
                  }.jpg` }
               alt={ `${ this.props.shoe.brand } ${ this.props.shoe.colorway }` }
            />
            <div className='row justify-content-center align-items-center mb-4'>
               { imageIdArr.map(id => (
                  <ProductImageThumbnail
                     key={ id }
                     shoeId={ this.props.shoe.shoeId }
                     brand={ this.props.shoe.brand }
                     imageFolderURL={ this.props.shoe.imageFolderName }
                     colorway={ this.props.shoe.colorway }
                     imageId={ id }
                     isActive={ id === this.props.activeShoeImage }
                     changeActiveShoeImage={ this.props.changeActiveShoeImage }
                  />
               )) }
            </div>
         </div>
      );
   }
}

ProductImage.propTypes = {
   shoe: PropTypes.object.isRequired,
   activeShoeImage: PropTypes.number.isRequired,
   changeActiveShoeImage: PropTypes.func.isRequired
};

export default ProductImage;
