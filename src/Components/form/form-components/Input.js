import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ ...props }) => (
   <div className={ props.inline ? 'col-12 col-sm' : 'form-group' }>
      {
         props.labelText &&
         <label className='text-uppercase'>{ props.labelText }</label>
      }
      <input
         className={ `form-control ${ props.className }` }
         type={ props.type }
         name={ props.name }
         placeholder={ props.placeholder }
         defaultValue={ props.defaultValue }
         disabled={ props.disabled }
         required={ props.required }
         ref={ props.forwardedRef }
      />
   </div>
);

Input.propTypes = {
   labelText: PropTypes.string,
   placeholder: PropTypes.string,
   onChange: PropTypes.func,
   defaultValue: PropTypes.string.isRequired,
   inline: PropTypes.bool.isRequired,
   className: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   disabled: PropTypes.bool.isRequired,
   required: PropTypes.bool.isRequired,
   forwardedRef: PropTypes.func.isRequired
};

Input.defaultProps = {
   inline: false,
   required: true,
   disabled: false,
   className: '',
   defaultValue: ''
};

export default Input;
