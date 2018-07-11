import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../button/PrimaryButton';

class InputWithButton extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.value !== this.props.value) return true;
      return false;
   }

   render() {
      return (
         <div className='form-group'>
            {
               this.props.labelText &&
               <label className='text-uppercase secondary-color'>
                  { this.props.labelText }
               </label>
            }
            <div className='input-group'>
               <input
                  className='form-control'
                  type={ this.props.type }
                  name={ this.props.name }
                  placeholder={ this.props.placeholder }
                  value={ this.props.value }
                  required={ this.props.required }
                  onChange={ this.props.onChange }
               />
               <div className='input-group-append'>
                  <PrimaryButton>
                     { this.props.buttonText }
                  </PrimaryButton>
               </div>
            </div>
         </div>
      );
   }
}

InputWithButton.propTypes = {
   labelText: PropTypes.string,
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   required: PropTypes.bool.isRequired,
}

InputWithButton.defaultProps = {
   required: true,
}

export default InputWithButton;