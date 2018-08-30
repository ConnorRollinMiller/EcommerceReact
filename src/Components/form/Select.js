import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

   shouldComponentUpdate(nextProps) {
      if (nextProps.value !== this.props.value) return true;
      return false;
   }

   render() {
      return (
         <select
            className={ `form-control ${ this.props.className }` }
            name={ this.props.name }
            onChange={ this.props.onChange }
            value={ this.props.value }
         >
            { this.props.options.map(opt => (
               <option key={ opt } value={ opt }>
                  { opt }
               </option>
            )) }
         </select>
      );
   }
}

Select.propTypes = {
   className: PropTypes.string,
   name: PropTypes.string.isRequired,
   options: PropTypes.array.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired
};

Select.defaultProps = {
   className: ''
};

export default Select;
