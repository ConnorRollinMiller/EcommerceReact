import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductImageThumnail extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.isActive !== this.props.isActive) {
         return true;
      } else if (nextProps.shoeId !== this.props.shoeId) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div
            className='product-image-thumbnail col-sm-3 col-6'
            style={ this.props.isActive ? { opacity: '1' } : { opacity: '0.5' } }>
            <img
               className='w-100'
               src={ `/images/${ this.props.brand }/${ this.props.imageFolderURL }/${ this.props.imageId }.jpg` }
               alt={ `${ this.props.brand } ${ this.props.colorway } ${ this.props.imageId }` }
               onClick={ () =>
                  this.props.changeActiveShoeImage(this.props.imageId)
               }
            />
         </div>
      );
   }
}

ProductImageThumnail.propTypes = {
   shoeId: PropTypes.number.isRequired,
   brand: PropTypes.string.isRequired,
   imageFolderURL: PropTypes.string.isRequired,
   colorway: PropTypes.string.isRequired,
   imageId: PropTypes.number.isRequired,
   isActive: PropTypes.bool.isRequired,
   changeActiveShoeImage: PropTypes.func.isRequired
};

export default ProductImageThumnail;
