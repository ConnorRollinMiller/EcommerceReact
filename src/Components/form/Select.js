import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ ...props }) => (
	<select className={ `form-control ${ props.className }` } onChange={ props.onChange }>
		{
			props.options.map(opt => {
				if (props.options[ 0 ]) return <option key={ opt }>{ opt }</option>
				return <option key={ opt } value={ opt }>{ opt }</option>
			})
		}
	</select>
);

Select.propTypes = {
	options: PropTypes.array.isRequired,
	className: PropTypes.string,
	required: PropTypes.bool,
	onChange: PropTypes.func.isRequired
}

export default Select;