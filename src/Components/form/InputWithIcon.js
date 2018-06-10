import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/FormInputWithIcon.css';

const FormInputWithIcon = ({ ...props }) => (
	<div className='form-group position-relative'>
		<FontAwesomeIcon className='form-input-with-icon-icon' icon={ props.iconName } />
		<input
			className={ `form-input-with-icon-input form-control ${ props.className }` }
			type={ props.type }
			name={ props.name }
			placeholder={ props.placeholder }
			onChange={ props.onChange }
			required={ props.required }
		/>
	</div>
);

FormInputWithIcon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
}

FormInputWithIcon.defaultProps = {
	required: true
}

export default FormInputWithIcon;