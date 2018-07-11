import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Input from '../form/Input';
import Select from '../form/Select';
import PrimaryButton from '../button/PrimaryButton';

import { connect } from 'react-redux';
import { inputChange, submitOrder } from '../../redux/actions/checkoutActions';
import { clearCart } from '../../redux/actions/cartActions';
import { COUNTRIES, STATES } from '../../utilities/constants';

class CheckoutForm extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.firstName !== this.props.firstName) return true;
      if (nextProps.lastName !== this.props.lastName) return true;
      if (nextProps.country !== this.props.country) return true;
      if (nextProps.state !== this.props.state) return true;
      if (nextProps.city !== this.props.city) return true;
      if (nextProps.zipCode !== this.props.zipCode) return true;
      if (nextProps.address !== this.props.address) return true;
      if (nextProps.phone !== this.props.phone) return true;
      if (nextProps.email !== this.props.email) return true;
      return false;
   }

   handleZipCode = (e) => {
      const value = e.target.value;
      const name = e.target.name;

      const regExp = /^[0-9\b]+$/;

      if (value === '' || regExp.test(value)) {
         this.props.inputChange(name, value);
      }
   }

   render() {
      return (
         <Form
            className='col-md-6'
            onSubmit={ e =>
               this.props.submitOrder(
                  e,
                  this.props.firstName,
                  this.props.lastName,
                  this.props.country,
                  this.props.state,
                  this.props.city,
                  this.props.address,
                  this.props.zipCode,
                  this.props.phone,
                  this.props.email,
                  this.props.total,
                  this.props.cart,
                  this.props.user
               )
            }
         >
            <div className='form-group mb-0 row'>
               <Input
                  className='mb-3'
                  inline={ true }
                  type='text'
                  name='firstName'
                  value={ this.props.firstName }
                  placeholder='First Name'
                  onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
               />
               <Input
                  className='mb-3'
                  inline={ true }
                  type='text'
                  name='lastName'
                  value={ this.props.lastName }
                  placeholder='Last Name'
                  onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
               />
            </div>
            <div className='form-group mb-0 row'>
               <div className='col-12 col-sm-6'>
                  <Select
                     className='mb-3'
                     name='country'
                     options={ [ 'Select Country', ...COUNTRIES ] }
                     value={ this.props.country }
                     onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
                  />
               </div>
               <div className='col-12 col-sm-6'>
                  <Select
                     className='mb-3'
                     name='state'
                     options={ [ 'Select State', ...STATES ] }
                     value={ this.props.state }
                     onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
                  />
               </div>
            </div>
            <Input
               className='mb-3'
               type='text'
               name='address'
               value={ this.props.address }
               placeholder='Street Address'
               onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
            />
            <div className='form-group mb-0 row'>
               <Input
                  className='mb-3'
                  inline={ true }
                  type='text'
                  name='city'
                  value={ this.props.city }
                  placeholder='City'
                  onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
               />
               <Input
                  className='form-control mb-3'
                  inline={ true }
                  type='text'
                  name='zipCode'
                  placeholder='Zip Code'
                  pattern='^[0-9]*$'
                  onChange={ e => this.handleZipCode(e) }
                  value={ this.props.zipCode }
               />
            </div>
            <div className='form-group mb-0 row'>
               <Input
                  className='mb-3'
                  inline={ true }
                  type='tel'
                  name='phone'
                  value={ this.props.phone }
                  placeholder='Phone'
                  onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
               />
               <Input
                  className='mb-3'
                  inline={ true }
                  type='email'
                  name='email'
                  value={ this.props.email }
                  placeholder='Email'
                  onChange={ e => this.props.inputChange(e.target.name, e.target.value) }
               />
            </div>
            <PrimaryButton
               fullWidth={ true }>
               Place Order
               </PrimaryButton>
         </Form>
      );
   }
}

CheckoutForm.propTypes = {
   firstName: PropTypes.string.isRequired,
   lastName: PropTypes.string.isRequired,
   country: PropTypes.string.isRequired,
   state: PropTypes.string.isRequired,
   address: PropTypes.string.isRequired,
   zipCode: PropTypes.string.isRequired,
   city: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   total: PropTypes.number.isRequired,
   cart: PropTypes.array.isRequired,
   inputChange: PropTypes.func.isRequired,
   submitOrder: PropTypes.func.isRequired,
   user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
   firstName: state.checkoutReducer.firstName,
   lastName: state.checkoutReducer.lastName,
   country: state.checkoutReducer.country,
   state: state.checkoutReducer.state,
   address: state.checkoutReducer.address,
   city: state.checkoutReducer.city,
   zipCode: state.checkoutReducer.zipCode,
   phone: state.checkoutReducer.phone,
   email: state.checkoutReducer.email,
   total: state.cartReducer.total,
   cart: state.cartReducer.cart,
   user: state.accountReducer.user
});

const mapDispatchToProps = dispatch => ({
   inputChange: (name, value) => dispatch(inputChange(name, value)),
   submitOrder: (
      e,
      firstName,
      lastName,
      country,
      state,
      city,
      address,
      zipCode,
      phone,
      email,
      total,
      cart,
      user
   ) => {
      e.preventDefault();
      dispatch(clearCart());
      dispatch(
         submitOrder(
            firstName,
            lastName,
            country,
            state,
            city,
            address,
            zipCode,
            phone,
            email,
            total,
            cart,
            user
         )
      );
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CheckoutForm);
