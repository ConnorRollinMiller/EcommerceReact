import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioButton extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.checked !== this.props.checked) return true;
      return false;
   }

   render() {
      return (
         <div className='form-check'>
            <input
               className='form-check-input'
               type='radio'
               name={this.props.inputName}
               disabled={this.props.checked}
               checked={this.props.checked}
               onClick={() => this.props.changeFilter(this.props.shoeFilter)}
            />
            <label className='form-check-label'>{this.props.labelText}</label>
         </div>
      );
   }
}

RadioButton.propTypes = {
   checked: PropTypes.bool.isRequired,
   inputName: PropTypes.string.isRequired,
   shoeFilter: PropTypes.string.isRequired,
   labelText: PropTypes.string.isRequired,
   changeFilter: PropTypes.func.isRequired
};

export default RadioButton;
