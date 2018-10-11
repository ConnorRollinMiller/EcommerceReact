import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/ProductCard.css';

import LinkComponent from '../common/LinkComponent';
import PrimaryButton from '../button/PrimaryButton';

class ProductListItem extends Component {

   shouldComponentUpdate(nextProps) {
      // if (nextProps.shoe !== this.props.shoe) return true;
      return false;
   }

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
                  <PrimaryButton className='product-card-quick-view-button text-truncate rounded-0'
                     onClick={ () => this.props.showQuickview(this.props.shoe) }>
                     Quickview
                  </PrimaryButton>
                  <div>
                     <p className='text-uppercase text-white-50 mb-0'>{ this.props.shoe.brand }</p>
                     <LinkComponent to={ `/shop/${ this.props.shoe.shoeId }` }>
                        <h4 className='product-card-title text-uppercase h5 text-truncate mb-0'>
                           { this.props.shoe.colorway }
                        </h4>
                     </LinkComponent>
                     <p className='product-card-price text-truncate mb-0'>
                        ${ this.props.shoe.price.toFixed(2) }
                     </p>
                     <PrimaryButton
                        className='col-10 col-sm-6 text-truncate mx-auto mt-2'
                        onClick={ this.props.addToCart }>
                        Add To Cart
                     </PrimaryButton>
                  </div>
               </div>
            </article>
         </div>
      );
   }
}

ProductListItem.propTypes = {
   shoe: PropTypes.object.isRequired,
   addToCart: PropTypes.func.isRequired,
   showQuickview: PropTypes.func.isRequired
};

export default ProductListItem;
