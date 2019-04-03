import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LinkComponent from '../common/LinkComponent';
import convertDate from '../../utilities/convertDate';

const OrderedProductListItem = ({ ...props }) => (
   <article className="row align-items-center justify-content-center text-center px-4 mb-2" >
      <img
         className="col-6 col-md-4 img-thumbnail border-white p-4"
         src={ `/images/${ props.shoe.brand }/${ props.shoe.imageFolderName }/1.jpg` }
         alt={ `${ props.shoe.brand } ${ props.shoe.model } ${ props.shoe.colorway }` }
      />
      <div className="col-6 col-md-4">
         <LinkComponent to={ `/shop/${ props.shoe.shoeId }` }>
            <p className="text-uppercase mb-0">{ props.shoe.brand }</p>
            <h4 className="product-card-title text-uppercase h5 text-truncate mb-0">
               { props.shoe.colorway }
            </h4>
         </LinkComponent>
         <p className="font-weight-bold mb-2">
            ${ props.shoe.price.toFixed(2) }
         </p>
         <p className="text-muted mb-0">
            Order Date: { convertDate(props.shoe.orderDate) }
         </p>
      </div>
   </article>
);

OrderedProductListItem.propTypes = {

}

export default OrderedProductListItem;