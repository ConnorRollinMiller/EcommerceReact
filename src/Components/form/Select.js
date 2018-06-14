import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ ...props }) => (
	<select className={ `form-control ${ props.className }` } name={ props.name } onChange={ props.onChange }>
		{
			props.options.map(opt => {
				if (props.options[ 0 ]) return <option key={ opt }>{ opt }</option>
				return <option key={ opt } value={ opt }>{ opt }</option>
			})
		}
	</select>
);

Select.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired
}

Select.defaultProps = {
	className: ''
}

export default Select;