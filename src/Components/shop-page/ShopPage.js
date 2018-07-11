import React, { Component } from 'react';
import PageTitle from '../common/PageTitle';
import FilterProductList from '../product-card/FilterProductList';
import SideBar from './SideBar';
import Quickview from '../quickview/Quickview';
import './css/ShopPage.css';

import { connect } from 'react-redux';
import { setShoeFilter, closeQuickview } from '../../redux/actions/shoesAction';
import { Filters } from '../../redux/actions';

class ShopPage extends Component {
   state = {};

   static getDerivedStateFromProps(props, state) {
      if (props.filter === Filters.SHOW_FEATURED) {
         return {
            filter: props.setShoeFilter(Filters.SHOW_ALL)
         };
      }
      return null;
   }

   componentDidMount() {
      window.scrollTo(0, 0);
   }

   shouldComponentUpdate(nextProps) {
      if (nextProps.shoes !== this.props.shoes) return true;
      if (nextProps.filter !== this.props.filter) return true;
      if (nextProps.quickviewOpen !== this.props.quickviewOpen) return true;
      if (nextProps.notifications !== this.props.notifications) return true;
      return false;
   }

   render() {
      return (
         <main className='main-section'>
            <PageTitle />
            <div className='container-fluid row mx-auto'>
               <SideBar />
               <main className='col-12 col-lg-9'>
                  <FilterProductList />
               </main>
            </div>
            {this.props.quickviewOpen && (
               <Quickview
                  addToCart={this.props.addToCart}
                  closeQuickview={this.props.closeQuickview}
                  shoe={this.props.quickviewShoe}
               />
            )}
         </main>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   shoes: state.shoeReducer.shoes,
   filter: state.shoeReducer.filter,
   quickviewShoe: state.shoeReducer.quickviewShoe,
   quickviewOpen: state.shoeReducer.quickviewOpen,
   notifications: state.notificationReducer.notifications
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   setShoeFilter: filter => dispatch(setShoeFilter(filter)),
   closeQuickview: () => dispatch(closeQuickview())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ShopPage);
