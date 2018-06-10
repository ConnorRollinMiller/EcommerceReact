import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ ...props }) => (
	<div className={ props.inline ? 'col' : 'form-group' }>
		{
			props.labelText &&
			<label>{ props.labelText }</label>
		}
		<input
			className={ `form-control ${ props.className }` }
			type={ props.type }
			name={ props.name }
			placeholder={ props.placeholder }
			onChange={ props.onChange }
			required={ props.required }
		/>
	</div>
);

Input.propTypes = {
	className: PropTypes.string,
	pattern: PropTypes.string,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
	inline: false,
	required: true
}

export default Input;