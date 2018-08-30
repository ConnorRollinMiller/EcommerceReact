import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../icon/CloseIcon';
import LinkComponent from '../common/LinkComponent';
import './css/CartItem.css';

class CartItem extends Component {

   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <div className='d-flex align-items-center justify-content-between px-2 py-3 text-uppercase'>
            <img
               className='img-fluid shopping-card-img'
               src={ `/images/${ this.props.shoe.brand }/${ this.props.shoe.imageFolderName }/1.jpg` }
               alt={ `${ this.props.shoe.model } ${ this.props.shoe.colorway }` }
            />
            <div className='text-center text-truncate px-2'>
               <LinkComponent
                  className='h5 font-weight-bold'
                  to={ `/shop/${ this.props.shoe.shoeId }` }
               >
                  <p className='mb-0 text-truncate '>{ this.props.shoe.model }</p>
                  <p className='mb-0 text-truncate '>
                     { this.props.shoe.colorway }
                  </p>
               </LinkComponent>
               <p className='mb-0 font-weight-bold'>
                  ${ this.props.shoe.price.toFixed(2) }
               </p>
            </div>
            { this.props.displayCloseIcon && (
               <CloseIcon
                  className='ml-2 shopping-cart-remove-icon'
                  size='2x'
                  onClick={ () =>
                     this.props.removeFromCart(
                        this.props.id,
                        this.props.shoe.price
                     )
                  }
               />
            ) }
         </div>
      );
   }
}

CartItem.propTypes = {
   removeFromCart: PropTypes.func,
   shoe: PropTypes.object.isRequired,
   id: PropTypes.number.isRequired,
   displayCloseIcon: PropTypes.bool.isRequired
};

CartItem.defaultProps = {
   displayCloseIcon: true
};

export default CartItem;
