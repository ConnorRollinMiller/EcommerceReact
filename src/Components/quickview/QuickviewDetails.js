import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PrimaryButton from '../button/PrimaryButton';
import Select from '../form/Select';

import { SHOE_SIZES } from '../../utilities/constants';

class QuickviewDetails extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <div className="col-md-6 text-center text-uppercase my-2">
            <span className="text-uppercase text-black-50 mb-0">
               {this.props.shoe.Brand}
            </span>
            <Link
               to={`/shop/${this.props.shoe.ShoeId}`}
               onClick={() => this.props.closeQuickview()}
            >
               <h4 className="h5 mb-0 font-weight-bold mb-0">
                  {this.props.shoe.Model}
               </h4>
               <h3 className="mb-0 font-weight-bold mb-2">
                  {this.props.shoe.Colorway}
               </h3>
            </Link>
            <p className="h4 font-weight-bold mb-2">
               ${this.props.shoe.Price.toFixed(2)}
            </p>
            <Select
               className="col-6 mx-auto my-3"
               options={SHOE_SIZES}
               name="size"
               onChange={e => this.props.changeShoeSize(e.target.value)}
            />
            {this.props.errorMessage && (
               <p className="text-danger text-capitalize mb-3">
                  {this.props.errorMessage}
               </p>
            )}
            <PrimaryButton
               className="col-6"
               onClick={() => this.props.addToCart(this.props.shoe)}
            >
               Add To Cart
            </PrimaryButton>
         </div>
      );
   }
}

QuickviewDetails.propTypes = {
   shoe: PropTypes.object.isRequired
};

export default QuickviewDetails;
