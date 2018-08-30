import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../product-card/ProductCard';

class ProductList extends Component {

   // shouldComponentUpdate(nextProps) {
   //    if (nextProps.filter !== this.props.filter) return true;
   //    if (nextProps.shoes.length !== this.props.shoes.length) return true;
   //    for (let i = 0; i < nextProps.length; i++) {
   //       if (nextProps.shoes[ i ] !== this.props.shoes[ i ]) return true;
   //    }
   //    return false;
   // }

   render() {
      return (
         <section className='container py-4'>
            { this.props.sectionTitle && (
               <SectionTitle title={ this.props.sectionTitle } />
            ) }
            <div className='row justify-content-center align-items-end px-0 py-4 mx-auto'>
               { this.props.error ? (
                  <h1 className='text-center text-capitalize alert alert-danger'>
                     there was an error!
                  </h1>
               ) : (
                     this.props.shoes.map(shoe => (
                        <ProductCard
                           key={ shoe.shoeId }
                           shoe={ shoe }
                           addToCart={ this.props.addToCart }
                           showQuickview={ this.props.showQuickview }
                        />
                     ))
                  ) }
            </div>
         </section>
      );
   }
}

ProductList.propTypes = {
   sectionTitle: PropTypes.string,
   shoes: PropTypes.array,
   filter: PropTypes.string,
   addToCart: PropTypes.func.isRequired,
   showQuickview: PropTypes.func.isRequired,
   error: PropTypes.bool.isRequired
};

export default ProductList;
