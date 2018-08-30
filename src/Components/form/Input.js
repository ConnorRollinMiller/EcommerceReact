import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

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
               <label className='text-uppercase secondary-color'>{ this.props.labelText }</label>
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

Input.propTypes = {
   labelText: PropTypes.string,
   placeholder: PropTypes.string,
   inline: PropTypes.bool.isRequired,
   onChange: PropTypes.func.isRequired,
   className: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   disabled: PropTypes.bool.isRequired,
   required: PropTypes.bool.isRequired,
};

Input.defaultProps = {
   inline: false,
   required: true,
   disabled: false,
   className: '',
};

export default Input;
