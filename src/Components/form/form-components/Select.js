import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ ...props }) => (
   <select
      className={ `form-control ${ props.className }` }
      name={ props.name }
      ref={ props.forwardedRef }
      value={ props.value }>
      {
         props.options.map(opt =>
            <option key={ opt } value={ opt }>
               { opt }
            </option>
         )
      }
   </select>
);

Select.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string.isRequired,
   options: PropTypes.array.isRequired,
};

Select.defaultProps = {
   className: ''
};

export default Select;
