import React, { Component } from 'react';
import RadioButton from '../form/RadioButton';
import './css/SideBar.css';

import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';
import { Filters } from '../../redux/actions';

class SideBar extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.filter !== this.props.filter) return true;
      return false;
   }

   render() {
      return (
         <aside className='col-3 d-none d-lg-block justify-content-center p-4'>
            <div className='my-4'>
               <form className='p-4'>
                  <h4 className='text-capitalize'>brand</h4>
                  <hr className='sidebar-hr col-1' />
                  <RadioButton
                     key='All'
                     inputName='brand'
                     labelText='All'
                     checked={ this.props.filter === Filters.SHOW_ALL }
                     shoeFilter={ Filters.SHOW_ALL }
                     changeFilter={ this.props.changeFilter }
                  />
                  <RadioButton
                     key='Adidas'
                     inputName='brand'
                     labelText='Adidas'
                     checked={ this.props.filter === Filters.SHOW_ADIDAS }
                     shoeFilter={ Filters.SHOW_ADIDAS }
                     changeFilter={ this.props.changeFilter }
                  />
                  <RadioButton
                     key='Jordan'
                     inputName='brand'
                     labelText='Jordan'
                     checked={ this.props.filter === Filters.SHOW_JORDAN }
                     shoeFilter={ Filters.SHOW_JORDAN }
                     changeFilter={ this.props.changeFilter }
                  />
                  <RadioButton
                     key='Nike'
                     inputName='brand'
                     labelText='Nike'
                     checked={ this.props.filter === Filters.SHOW_NIKE }
                     shoeFilter={ Filters.SHOW_NIKE }
                     changeFilter={ this.props.changeFilter }
                  />
               </form>
            </div>
         </aside>
      );
   }
}

const mapStateToProps = (state, ownProps) => ({
   filter: state.shoeReducer.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
   changeFilter: filter => dispatch(setShoeFilter(filter))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SideBar);
