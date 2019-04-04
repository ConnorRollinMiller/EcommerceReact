import React, { Component } from 'react';
import PageTitle from '../components/common/PageTitle';
import FilterProductList from '../components/product-card/FilterProductList';
import SideBar from '../components/sidebar/SideBar';
import './css/ShopPage.css';

import { connect } from 'react-redux';
import { setShoeFilter, closeQuickview, fetchShoes } from '../redux/actions/shoesAction';
import { Filters } from '../redux/actions';

class ShopPage extends Component {

   componentDidMount() {

      if (this.props.filter === Filters.SHOW_FEATURED) {

         this.props.setShoeFilter(Filters.SHOW_ALL)

      }

      if (this.props.shoes.length === 0) {

         this.props.fetchShoes();

      }

   }

   shouldComponentUpdate(nextProps) {

      if (nextProps.shoes.length !== this.props.shoes.length) return true;
      if (nextProps.filter !== this.props.filter) return true;
      if (nextProps.quickviewOpen !== this.props.quickviewOpen) return true;
      if (nextProps.notifications !== this.props.notifications) return true;

      return false;

   }

   render() {
      return (
         <React.Fragment>
            <PageTitle />
            <div className='container row mx-auto'>
               <SideBar />
               <main className='col-12 col-lg-9'>
                  <FilterProductList />
               </main>
            </div>
         </React.Fragment>
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
   fetchShoes: () => dispatch(fetchShoes()),
   setShoeFilter: filter => dispatch(setShoeFilter(filter)),
   closeQuickview: () => dispatch(closeQuickview())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ShopPage);
