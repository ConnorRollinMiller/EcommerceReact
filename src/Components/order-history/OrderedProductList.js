import React from 'react';
import PropTypes from 'prop-types';
import OrderedProductListItem from './OrderedProductListItem';

const OrderedProductList = ({ ...props }) => (
   <div className='col-12 py-4 mx-auto'>
      {
         props.shoes.map(s =>
            <OrderedProductListItem
               key={ s.shoeId }
               shoe={ s }
            />
         )
      }
   </div>
);

OrderedProductList.propTypes = {}

export default OrderedProductList;