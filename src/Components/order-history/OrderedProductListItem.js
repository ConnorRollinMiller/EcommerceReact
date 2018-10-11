import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LinkComponent from '../common/LinkComponent';
import convertDate from '../../utilities/convertDate';

class OrderedProductListItem extends Component {
   render() {
      return (
         <article className="row align-items-center justify-content-center text-center px-4 mb-2">
            <img
               className="col-6 col-md-4 img-thumbnail border-white p-4"
               src={ `/images/${ this.props.shoe.brand }/${ this.props.shoe.imageFolderName }/1.jpg` }
               alt={ '' }
            />
            <div className="col-6 col-md-4">
               <LinkComponent to={ `/shop/${ this.props.shoe.shoeId }` }>
                  <p className="text-uppercase mb-0">{ this.props.shoe.brand }</p>
                  <h4 className="product-card-title text-uppercase h5 text-truncate mb-0">
                     { this.props.shoe.colorway }
                  </h4>
               </LinkComponent>
               <p className="font-weight-bold mb-2">
                  ${ this.props.shoe.price.toFixed(2) }
               </p>
               <p className="text-muted mb-0">
                  Order Date: { convertDate(this.props.shoe.orderDate) }

               </p>
            </div>
         </article>
      );
   }
}

OrderedProductListItem.propTypes = {

}

export default OrderedProductListItem;