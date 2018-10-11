import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from '../form/form-components/Select';
import PrimaryButton from '../button/PrimaryButton';
import SocialMediaShareProduct from './SocialMediaShareProduct';
import './css/ProductDetails.css';
import { SHOE_SIZES } from '../../constants';

class ProductDetails extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.shoe !== this.props.shoe) return true;
      return false;
   }

   render() {
      return (
         <div className='col-md-6 flex-column text-center text-uppercase mb-4'>
            <span className='col-12 text-uppercase'>
               { this.props.shoe.brand }
            </span>
            <h4 className='col-12 mb-0 font-weight-bold mb-1'>
               { this.props.shoe.model }
            </h4>
            <h3 className='col-12 text-center mb-0 font-weight-bold mb-0'>
               { this.props.shoe.colorway }
            </h3>

            <hr className='product-details-hr mx-auto' />

            <strong className='h3 mb-0 font-weight-bold secondary-color'>
               ${ this.props.shoe.price.toFixed(2) }
            </strong>
            <Select
               className='col-8 col-md-6 mx-auto my-4'
               name='shoeSize'
               options={ SHOE_SIZES }
               onChange={ e => e.preventDefault() }
            />
            <PrimaryButton
               className='col-8 col-md-6 btn btn-primary py-2 mx-auto'
               onClick={ this.props.addToCart }>
               Add To Cart
            </PrimaryButton>

            <hr className='col-8 mx-auto my-4' />

            <SocialMediaShareProduct shoe={ this.props.shoe } />
         </div>
      );
   }
}

ProductDetails.propTypes = {
   shoe: PropTypes.object.isRequired,
   addToCart: PropTypes.func.isRequired
};

export default ProductDetails;
