import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkComponent from '../common/LinkComponent';
import PrimaryButton from '../button/PrimaryButton';
import Select from '../form/form-components/Select';

import { SHOE_SIZES } from '../../utilities/constants';

class QuickviewDetails extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <div className='col-md-6 text-center text-uppercase p-4'>
            <span className='text-uppercase text-black-50 mb-0'>
               { this.props.shoe.brand }
            </span>
            <LinkComponent
               to={ `/shop/${ this.props.shoe.shoeId }` }
               onClick={ () => this.props.closeQuickview() }>
               <h4 className='h5 mb-0 font-weight-bold mb-0'>
                  { this.props.shoe.model }
               </h4>
               <h3 className='mb-0 font-weight-bold mb-2'>
                  { this.props.shoe.colorway }
               </h3>
            </LinkComponent>
            <p className='h4 font-weight-bold mb-2'>
               ${ this.props.shoe.price.toFixed(2) }
            </p>
            <Select
               className='col-12 col-sm-6 mx-auto my-3'
               options={ SHOE_SIZES }
               name='size'
               onChange={ e => this.props.changeShoeSize(e.target.value) }
            />
            {
               this.props.errorMessage &&
               <p className='text-danger text-capitalize mb-3'>
                  { this.props.errorMessage }
               </p>
            }
            <PrimaryButton
               className='col-12 col-sm-6'
               onClick={ this.props.addToCart }>
               Add To Cart
            </PrimaryButton>
         </div>
      );
   }
}

QuickviewDetails.propTypes = {
   shoe: PropTypes.object.isRequired
};

export default QuickviewDetails;
