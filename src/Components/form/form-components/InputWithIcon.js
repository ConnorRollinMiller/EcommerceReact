import React from 'react';
import PropTypes from 'prop-types';
import './css/FormInputWithIcon.css';

const FormInputWithIcon = ({ ...props }) => (
   <div className='form-group position-relative'>
      { props.children }
      <input
         className={ `form-input-with-icon-input form-control ${ props.className }` }
         type={ props.type }
         name={ props.name }
         defaultValue={ props.value }
         placeholder={ props.placeholder }
         onChange={ props.onChange }
         ref={ props.forwardedRef }
      />
   </div>
);

FormInputWithIcon.propTypes = {
   className: PropTypes.string,
   onChange: PropTypes.func,
   forwardedRef: PropTypes.func,
   defaultValue: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   placeholder: PropTypes.string.isRequired,
   children: PropTypes.element
}

FormInputWithIcon.defaultProps = {
   defaultValue: ''
}

export default FormInputWithIcon;