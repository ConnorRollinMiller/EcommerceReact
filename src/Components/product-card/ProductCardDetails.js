import React from 'react';
import PropTypes from 'prop-types';
import LinkComponent from '../common/LinkComponent';
import PrimaryButton from '../button/PrimaryButton';

const ProductCardDetails = ({ ...props }) => (
   <div>
      <p className='text-uppercase text-white-50 mb-0'>{ props.shoe.brand }</p>
      <LinkComponent to={ `/shop/${ props.shoe.shoeId }` }>
         <h4 className='product-card-title text-uppercase h5 text-truncate mb-0'>
            { props.shoe.colorway }
         </h4>
      </LinkComponent>
      <p className='product-card-price text-truncate mb-0'>
         ${ props.shoe.price.toFixed(2) }
      </p>
      <PrimaryButton
         className='col-10 col-sm-6 text-truncate mx-auto mt-2'
         onClick={ () => props.addToCart(props.shoe) }
      >
         Add To Cart
      </PrimaryButton>
   </div>
);

ProductCardDetails.propTypes = {
   shoe: PropTypes.object.isRequired
};

export default ProductCardDetails;
