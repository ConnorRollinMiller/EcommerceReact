import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ControlledInput extends Component {

   shouldComponentUpdate(nextProps) {

      if (nextProps.value !== this.props.value) return true;
      if (nextProps.disabled !== this.props.disabled) return true;

      return false;

   }

   render() {
      return (
         <div className={ this.props.inline ? 'col-12 col-sm' : 'form-group' }>
            {
               this.props.labelText &&
               <label className='text-uppercase'>{ this.props.labelText }</label>
            }
            <input
               className={ `form-control ${ this.props.className }` }
               type={ this.props.type }
               name={ this.props.name }
               placeholder={ this.props.placeholder }
               value={ this.props.value }
               disabled={ this.props.disabled }
               required={ this.props.required }
               onChange={ this.props.onChange }
            />
         </div>
      );
   }
}
ControlledInput.propTypes = {
   labelText: PropTypes.string,
   placeholder: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.string.isRequired,
   inline: PropTypes.bool.isRequired,
   className: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   disabled: PropTypes.bool.isRequired,
   required: PropTypes.bool.isRequired,
};

ControlledInput.defaultProps = {
   inline: false,
   required: true,
   disabled: false,
   className: '',
};

export default ControlledInput;