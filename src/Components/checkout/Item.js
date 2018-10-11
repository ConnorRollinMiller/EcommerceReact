import React from 'react';
import PropTypes from 'prop-types';
import LinkComponent from '../common/LinkComponent';

const Item = ({ ...props }) => (
   <article className='media d-flex align-items-center justify-content-between text-center mb-2' >
      <img
         className='img-fluid p-0'
         style={ { width: '100px', height: 'auto' } }
         src={ `/images/${ props.shoe.brand }/${ props.shoe.imageFolderName }/1.jpg` }
         alt={ `${ props.shoe.brand } ${ props.shoe.colorway }` }
      />
      <div className='media-body text-center p-0'>
         <LinkComponent className='h5' to={ `/shop/${ props.shoe.shoeId }` }>
            <p className='mb-0'>{ props.shoe.brand }</p>
            <p className='mb-0'>{ props.shoe.colorway }</p>
         </LinkComponent>
      </div>
      <div className='p-0'>
         <p className='font-weight-bold mb-0'>${ props.shoe.price }</p>
      </div>
   </article>
);

Item.propTypes = {
   shoe: PropTypes.object.isRequired
};

export default Item;
