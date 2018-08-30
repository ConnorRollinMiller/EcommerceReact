import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../button/PrimaryButton';
import CheckmarkIcon from '../icon/CheckmarkIcon';

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
                  disabled={ this.props.disabled }
                  required={ this.props.required }
                  onChange={ this.props.onChange }
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
   disabled: false
}

export default InputWithButton;