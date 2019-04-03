import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ ...props }) => (
   <form className={ props.className } onSubmit={ props.onSubmit } encType="multipart/form-data">
      { props.children }
   </form>
);

Form.propTypes = {
   className: PropTypes.string.isRequired,
   onSubmit: PropTypes.func.isRequired
}

Form.defaultProps = {
   className: ''
}

export default Form;