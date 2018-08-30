import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/ProductCard.css';
import ProductCardDetails from './ProductCardDetails';
import QuickviewButton from './QuickviewButton';

class ProductCard extends Component {
   // shouldComponentUpdate(nextProps) {
   //    if (nextProps.shoe !== this.props.shoe) return true;
   //    return false;
   // }

   render() {
      return (
         <div className='col-12 col-sm-6 col-md-4 p-0'>
            <article className='product-card m-2 flex-column justify-content-end text-center'>
               <img
                  className='product-card-img img-fluid py-4'
                  src={ `/images/${ this.props.shoe.brand }/${ this.props.shoe.imageFolderName }/1.jpg` }
                  alt={ `${ this.props.shoe.brand } ${ this.props.shoe.colorway }` }
               />
               <div className='product-card-info py-4'>
                  <QuickviewButton
                     onClick={ () => this.props.showQuickview(this.props.shoe) }>
                     Quickview
                  </QuickviewButton>
                  <ProductCardDetails
                     shoe={ this.props.shoe }
                     addToCart={ this.props.addToCart }
                     showQuickview={ this.props.showQuickview }
                  />
               </div>
            </article>
         </div>
      );
   }
}

ProductCard.propTypes = {
   shoe: PropTypes.object.isRequired,
   addToCart: PropTypes.func.isRequired,
   showQuickview: PropTypes.func.isRequired
};

export default ProductCard;
