import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/FormInputWithIcon.css';

class FormInputWithIcon extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.value !== this.props.value) return true;
		return false;
	}

	render() {
		return (
			<div className='form-group position-relative'>
				{ this.props.children }
				<input
					className={ `form-input-with-icon-input form-control ${ this.props.className }` }
					type={ this.props.type }
					name={ this.props.name }
					value={ this.props.value }
					placeholder={ this.props.placeholder }
					onChange={ this.props.onChange }
				/>
			</div>
		)
	}
}

FormInputWithIcon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.element
}

export default FormInputWithIcon;