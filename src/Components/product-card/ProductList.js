import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../common/SectionTitle';
import ProductListItem from './ProductListItem';

class ProductList extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.shoes.length !== this.props.shoes.length) return true;
      for (let i = 0; i < nextProps.length; i++) {
         if (nextProps.shoes[ i ] !== this.props.shoes[ i ]) return true;
      }
      return false;
   }

   render() {
      return (
         <section className='container py-4'>
            {
               this.props.sectionTitle &&
               <SectionTitle title={ this.props.sectionTitle } />
            }
            <div className='row justify-content-center align-items-end px-0 py-4 mx-auto'>
               {
                  this.props.error ? (
                     <h2 className='text-center text-capitalize alert alert-danger'>
                        There Was An Error - { this.props.errorMessage }
                     </h2>
                  ) : this.props.shoes.length === 0 ? (
                     <h2 className='text-center text-capitalize alert alert-danger'>
                        There Are No Shoes...
                     </h2>
                  ) : (
                           this.props.shoes.map(shoe =>
                              <ProductListItem
                                 key={ shoe.shoeId }
                                 shoe={ shoe }
                                 addToCart={ () => this.props.addToCart(shoe, this.props.cart) }
                                 showQuickview={ this.props.showQuickview }
                              />
                           )
                        )
               }
            </div>
         </section>
      );
   }
}

ProductList.propTypes = {
   sectionTitle: PropTypes.string,
   shoes: PropTypes.array,
   errorMessage: PropTypes.object,
   error: PropTypes.bool.isRequired,
   cart: PropTypes.array.isRequired,
   addToCart: PropTypes.func.isRequired,
   showQuickview: PropTypes.func.isRequired
};

export default ProductList;
