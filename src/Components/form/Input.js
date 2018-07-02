import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.value !== this.props.value) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div className={this.props.inline ? 'col' : 'form-group'}>
            {this.props.labelText && <label>{this.props.labelText}</label>}
            <input
               className={`form-control ${this.props.className}`}
               type={this.props.type}
               name={this.props.name}
               placeholder={this.props.placeholder}
               onChange={this.props.onChange}
               value={this.props.value}
               required={this.props.required}
            />
         </div>
      );
   }
}

Input.propTypes = {
   className: PropTypes.string,
   pattern: PropTypes.string,
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   required: PropTypes.bool.isRequired,
   placeholder: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
   inline: false,
   required: true
};

export default Input;
