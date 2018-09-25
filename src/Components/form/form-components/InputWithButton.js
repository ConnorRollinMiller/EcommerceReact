import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../button/PrimaryButton';

class InputWithButton extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.value !== this.props.value) return true;
      if (nextProps.disabled !== this.props.disabled) return true;
      if (nextProps.value !== this.props.value) return true;
      if (nextProps.buttonText !== this.props.buttonText) return true;

      return false;

   }

   render() {
      return (
         <div className='form-group'>
            {
               this.props.labelText &&
               <label className='text-uppercase'>
                  { this.props.labelText }
               </label>
            }
            <div className='input-group'>
               <input
                  className='form-control'
                  type={ this.props.type }
                  name={ this.props.name }
                  placeholder={ this.props.placeholder }
                  defaultValue={ this.props.defaultValue }
                  disabled={ this.props.disabled }
                  required={ this.props.required }
                  onChange={ this.props.onChange }
                  ref={ this.props.forwardedRef }
               />
               <div className='input-group-append d-flex align-items-center'>
                  <PrimaryButton disabled={ this.props.disabled }>
                     { this.props.buttonText }
                  </PrimaryButton>
               </div>
            </div>
         </div>
      );
   }
}

InputWithButton.propTypes = {
   defaultValue: PropTypes.string,
   onChange: PropTypes.func,
   forwardedRef: PropTypes.func,
   labelText: PropTypes.string,
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   required: PropTypes.bool.isRequired,
}

InputWithButton.defaultProps = {
   required: true,
   disabled: false,
   defaultValue: ''
}

export default InputWithButton;