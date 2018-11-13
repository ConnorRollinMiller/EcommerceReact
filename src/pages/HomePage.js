import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../components/carousel/Carousel';
import FilterProductList from '../components/product-card/FilterProductList';
import AdditionalInfoContainer from '../components/additional-info-card/AdditionalInfoContainer';
import BrandList from '../components/brand-card/BrandList';
import Newsletter from '../components/form/NewsletterForm';

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

      if (this.props)
         if (nextProps.filter !== this.props.filter) return true;
      if (nextProps.shoes !== this.props.shoes) return true;

      return false;

   }

   render() {
      return (
         <React.Fragment>
            <Carousel />
            <BrandList />
            <FilterProductList
               sectionTitle='featured Shoes'
               shoes={ this.props.shoes }
            />
            <Newsletter />
            <AdditionalInfoContainer />
         </React.Fragment>
      );
   }
}

HomePage.propTypes = {

   shoes: PropTypes.array.isRequired,
   filter: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   shoes: state.shoeReducer.shoes,
   filter: state.shoeReducer.filter
});

const mapDispatchToProps = dispatch => ({
   changeFilter: (filter) => dispatch(setShoeFilter(filter))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(HomePage);
