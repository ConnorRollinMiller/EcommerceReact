import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../form/Select';
import PrimaryButton from '../button/PrimaryButton';
import SocialMediaShareProduct from './SocialMediaShareProduct';
import './css/ProductDetails.css';

const sizes = ['Select Size', 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];

class ProductDetails extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.shoe !== this.props.shoe) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div className='col-md-6 flex-column text-center text-uppercase mb-4'>
            <span className='col-12 text-uppercase'>
               {this.props.shoe.Brand}
            </span>
            <h4 className='col-12 mb-0 font-weight-bold mb-1'>
               {this.props.shoe.Model}
            </h4>
            <h3 className='col-12 text-center mb-0 font-weight-bold mb-0'>
               {this.props.shoe.Colorway}
            </h3>

            <hr className='product-details-hr mx-auto' />

            <strong className='h3 mb-0'>
               ${this.props.shoe.Price.toFixed(2)}
            </strong>
            <Select
               className='col-8 col-md-6 mx-auto my-4'
               name='shoeSize'
               options={sizes}
               onChange={e => e.preventDefault()}
            />
            <PrimaryButton
               className='col-8 col-md-6 btn btn-primary py-2 mx-auto'
               onClick={() => this.props.addToCart(this.props.shoe)}
            >
               Add To Cart
            </PrimaryButton>

            <hr className='col-8 mx-auto my-4' />

            <SocialMediaShareProduct shoe={this.props.shoe} />
         </div>
      );
   }
}

ProductDetails.propTypes = {
   shoe: PropTypes.object.isRequired,
   addToCart: PropTypes.func.isRequired
};

export default ProductDetails;
