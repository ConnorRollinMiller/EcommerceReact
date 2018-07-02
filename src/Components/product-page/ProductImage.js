import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/ProductImage.css';
import ProductImageThumbnail from './ProductImageThumbnail';

const imageIdArr = [1, 2, 3, 4];

class ProductImage extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.shoe !== this.props.shoe) {
         return true;
      } else if (nextProps.activeShoeImage !== this.props.activeShoeImage) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mb-4">
            <img
               className="product-image-container img-fluid"
               src={`${this.props.shoe.ImageFolderURL}/${
                  this.props.activeShoeImage
               }.jpg`}
               alt={`${this.props.shoe.Brand} ${this.props.shoe.Colorway}`}
            />
            <div className="row justify-content-center align-items-center my-2">
               {imageIdArr.map(id => (
                  <ProductImageThumbnail
                     key={id}
                     shoeId={this.props.shoe.ShoeId}
                     brand={this.props.shoe.Brand}
                     imageFolderURL={this.props.shoe.ImageFolderURL}
                     colorway={this.props.shoe.Colorway}
                     imageId={id}
                     isActive={id === this.props.activeShoeImage}
                     changeActiveShoeImage={this.props.changeActiveShoeImage}
                  />
               ))}
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
