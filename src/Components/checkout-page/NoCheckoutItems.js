import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PrimaryButton from '../button/PrimaryButton';
import LinkComponent from '../common/LinkComponent';

class NoCheckoutItems extends Component {
   render() {
      return (
         <div
            className='col-12 py-4 d-flex flex-column justify-content-center align-items-center text-center'
         >
            <FontAwesomeIcon
               className='secondary-color mx-auto'
               icon='exclamation-triangle'
               size='5x'
            />
            <h2 className='text-capitalize my-4'>
               You don't have any items in your cart!
            </h2>
            <LinkComponent to='/shop'>
               <PrimaryButton largeButton={ true }>Shop Now</PrimaryButton>
            </LinkComponent>
         </div>
      );
   }
}

export default NoCheckoutItems;
