import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemOrdered extends Component {
   shouldComponentUpdate(nexProps) {
      return false;
   }

   render() {
      return (
         <article className='media d-flex align-items-center justify-content-between text-center mb-2'>
            <img
               className='img-fluid p-0'
               style={ { width: '100px', height: 'auto' } }
               src={ `${ this.props.shoe.ImageFolderURL }/1.jpg` }
               alt={ `${ this.props.shoe.Brand } ${ this.props.shoe.Colorway }` }
            />
            <div className='media-body text-center p-0'>
               <a className='h5' href={ `/shop/${ this.props.shoe.ShoeId }` }>
                  <p className='mb-0'>{ this.props.shoe.Brand }</p>
                  <p className='mb-0'>{ this.props.shoe.Colorway }</p>
               </a>
            </div>
            <div className='p-0'>
               <p className='font-weight-bold mb-0'>${ this.props.shoe.Price }</p>
            </div>
         </article>
      );
   }
}

ItemOrdered.propTypes = {
   shoe: PropTypes.object.isRequired
};

export default ItemOrdered;
