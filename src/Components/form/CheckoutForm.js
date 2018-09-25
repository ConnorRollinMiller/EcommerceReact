import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './form-components/Form';
import Input from './form-components/Input';
import ControlledInput from './form-components/ControlledInput';
import Select from './form-components/Select';
import PrimaryButton from '../button/PrimaryButton';

import { connect } from 'react-redux';
import { inputChange, submitOrder } from '../../redux/actions/checkoutActions';
import { clearCart } from '../../redux/actions/cartActions';
import { COUNTRIES, STATES } from '../../utilities/constants';

class CheckoutForm extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.cart !== this.props.cart) return true;
      if (nextProps.zipCode !== this.props.zipCode) return true;
      if (nextProps.phone !== this.props.phone) return true;

      return false;

   }

   handleZipCode = (e) => {
      const value = e.target.value;
      const name = e.target.name;

      if (value.length > 5) {
         return;
      }

      const regExp = /^[0-9\b]+$/;

      if (value === '' || regExp.test(value)) {
         this.props.inputChange(name, value);
      }

   }

   handlePhoneNumber = (e) => {
      const value = e.target.value;
      const name = e.target.name;

      const spl = value.split('').filter(x => Number(x));
      const nums = spl.join('');

      if (nums.length === 0) {
         this.props.inputChange(name, '');
         return;
      }

      if (nums.length >= 11) {
         return;
      }

      if (nums.length <= 3) {

         const str = `(${ nums.substring(0, nums.length) })`;

         this.props.inputChange(name, str);

      } else if (nums.length <= 6) {

         const str = `(${ nums.substring(0, 3) }) ${ nums.substring(3, nums.length) }`;

         this.props.inputChange(name, str);

      } else if (nums.length <= 10) {

         const str = `(${ nums.substring(0, 3) }) ${ nums.substring(3, 6) }-${ nums.substring(6, nums.length) }`;

         this.props.inputChange(name, str);

      }

   }

   render() {
      return (
         <Form
            className='col-md-6 py-4'
            onSubmit={ e => {
               e.preventDefault();
               this.props.submitOrder(
                  e,
                  this.firstNameRef.value,
                  this.lastNameRef.value,
                  this.countryRef.value,
                  this.stateRef.value,
                  this.cityRef.value,
                  this.addressRef.value,
                  this.props.zipCode,
                  this.props.phone,
                  this.emailRef.value,
                  this.props.total,
                  this.props.cart,
                  this.props.user.userId
               )
            }
            }>
            <div className='form-group mb-0 row'>
               <Input
                  className='mb-3'
                  inline={ true }
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  forwardedRef={ ref => this.firstNameRef = ref }
               />
               <Input
                  className='mb-3'
                  inline={ true }
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  forwardedRef={ ref => this.lastNameRef = ref }

               />
            </div>
            <div className='form-group mb-0 row'>
               <div className='col-12 col-sm-6'>
                  <Select
                     className='mb-3'
                     name='country'
                     options={ [ 'Select Country', ...COUNTRIES ] }
                     forwardedRef={ ref => this.countryRef = ref }
                  />
               </div>
               <div className='col-12 col-sm-6'>
                  <Select
                     className='mb-3'
                     name='state'
                     options={ [ 'Select State', ...STATES ] }
                     forwardedRef={ ref => this.stateRef = ref }
                  />
               </div>
            </div>
            <Input
               className='mb-3'
               type='text'
               name='address'
               placeholder='Street Address'
               forwardedRef={ ref => this.addressRef = ref }
            />
            <div className='form-group mb-0 row'>
               <Input
                  className='mb-3'
                  inline={ true }
                  type='text'
                  name='city'
                  placeholder='City'
                  forwardedRef={ ref => this.cityRef = ref }
               />
               <ControlledInput
                  className='form-control mb-3'
                  inline={ true }
                  type='text'
                  name='zipCode'
                  placeholder='Zip Code'
                  onChange={ e => this.handleZipCode(e) }
                  value={ this.props.zipCode }
               />
            </div>
            <div className='form-group mb-0 row'>
               <ControlledInput
                  className='mb-3'
                  inline={ true }
                  type='tel'
                  name='phone'
                  value={ this.props.phone }
                  placeholder='Phone'
                  onChange={ e => this.handlePhoneNumber(e) }
               />
               <Input
                  className='mb-3'
                  inline={ true }
                  type='email'
                  name='email'
                  placeholder='Email'
                  forwardedRef={ ref => this.emailRef = ref }
               />
            </div>
            <PrimaryButton fullWidth={ true }>
               Place Order
            </PrimaryButton>
         </Form>
      );
   }
}

CheckoutForm.propTypes = {
   user: PropTypes.object,
   zipCode: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired,
   total: PropTypes.number.isRequired,
   cart: PropTypes.array.isRequired,
   submitOrder: PropTypes.func.isRequired,
   inputChange: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
   zipCode: state.checkoutReducer.zipCode,
   phone: state.checkoutReducer.phone,
   total: state.cartReducer.total,
   cart: state.cartReducer.cart,
   user: state.accountReducer.user
});

const mapDispatchToProps = (dispatch) => ({
   inputChange: (name, value) => { dispatch(inputChange(name, value)); },
   submitOrder: (e, firstName, lastName, country, state, city, address, zipCode, phone, email, total, cart, userId) => {
      e.preventDefault();
      dispatch(clearCart());
      dispatch(submitOrder(firstName, lastName, country, state, city, address, zipCode, phone, email, total, cart, userId));
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CheckoutForm);
