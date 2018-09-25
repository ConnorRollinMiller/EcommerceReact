import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../components/carousel/Carousel';
import FilterProductList from '../components/product-card/FilterProductList';
import AdditionalInfoContainer from '../components/additional-info-card/AdditionalInfoContainer';
import BrandList from '../components/brand-card/BrandList';
import Newsletter from '../components/form/NewsletterForm';
import Quickview from '../components/quickview/Quickview';

import { setShoeFilter } from '../redux/actions/shoesAction';
import { Filters } from '../redux/actions';
import { connect } from 'react-redux';

class HomePage extends Component {

   componentDidMount() {
      if (this.props.shoes && this.props.filter !== Filters.SHOW_FEATURED) {
         this.props.changeFilter(Filters.SHOW_FEATURED);
      }
   }

   shouldComponentUpdate(nextProps) {

      if (nextProps.isQuickviewOpen !== this.props.isQuickviewOpen) return true;
      if (nextProps.shoes !== this.props.shoes) return true;

      return false;

   }

   render() {
      return (
         <main className='main-section'>
            <Carousel />
            <BrandList />
            <FilterProductList
               sectionTitle='featured Shoes'
               shoes={ this.props.shoes }
            />
            <Newsletter />
            <AdditionalInfoContainer />

            {
               // this.props.quickviewOpen && <Quickview /> 
            }
         </main>
      );
   }
}

HomePage.propTypes = {
   shoes: PropTypes.array.isRequired,
   isQuickviewOpen: PropTypes.bool.isRequired,
   notifications: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   shoes: state.shoeReducer.shoes,
   isQuickviewOpen: state.shoeReducer.quickviewOpen,
   notifications: state.notificationReducer.notifications
});

const mapDispatchToProps = dispatch => ({
   changeFilter: filter => dispatch(setShoeFilter(filter))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(HomePage);
