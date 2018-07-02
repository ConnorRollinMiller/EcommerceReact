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

   render() {
      return (
         <Form
            className="col-md-6 p-4 d-flex flex-column"
            onSubmit={e =>
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
                  this.props.cart
               )
            }
         >
            <div className="form-group row">
               <Input
                  inline={true}
                  type="text"
                  name="firstName"
                  value={this.props.firstName}
                  placeholder="First Name"
                  onChange={e =>
                     this.props.inputChange(e.target.name, e.target.value)
                  }
               />
               <Input
                  inline={true}
                  type="text"
                  name="lastName"
                  value={this.props.lastName}
                  placeholder="Last Name"
                  onChange={e =>
                     this.props.inputChange(e.target.name, e.target.value)
                  }
               />
            </div>
            <div className="form-group row">
               <div className="col">
                  <Select
                     name="country"
                     options={['Select Country', ...COUNTRIES]}
                     onChange={e =>
                        this.props.inputChange(e.target.name, e.target.value)
                     }
                     value={this.props.country}
                  />
               </div>
               <div className="col">
                  <Select
                     name="state"
                     options={['Select State', ...STATES]}
                     onChange={e =>
                        this.props.inputChange(e.target.name, e.target.value)
                     }
                     value={this.props.state}
                  />
               </div>
            </div>
            <Input
               type="text"
               name="address"
               value={this.props.address}
               placeholder="Street Address"
               onChange={e =>
                  this.props.inputChange(e.target.name, e.target.value)
               }
            />
            <div className="form-group row">
               <Input
                  inline={true}
                  type="text"
                  name="city"
                  value={this.props.city}
                  placeholder="City"
                  onChange={e =>
                     this.props.inputChange(e.target.name, e.target.value)
                  }
               />
               <Input
                  inline={true}
                  type="text"
                  name="zipCode"
                  value={this.props.zipCode}
                  placeholder="Zip Code"
                  onChange={e =>
                     this.props.inputChange(e.target.name, e.target.value)
                  }
               />
            </div>
            <div className="form-group row">
               <Input
                  inline={true}
                  type="tel"
                  name="phone"
                  value={this.props.phone}
                  placeholder="Phone"
                  onChange={e =>
                     this.props.inputChange(e.target.name, e.target.value)
                  }
               />
               <Input
                  inline={true}
                  type="email"
                  name="email"
                  value={this.props.email}
                  placeholder="Email"
                  onChange={e =>
                     this.props.inputChange(e.target.name, e.target.value)
                  }
               />
            </div>
            <PrimaryButton>Place Order</PrimaryButton>
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
   submitOrder: PropTypes.func.isRequired
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
   cart: state.cartReducer.cart
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
      cart
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
            cart
         )
      );
   }
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CheckoutForm);
