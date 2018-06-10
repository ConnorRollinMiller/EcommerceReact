import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ ...props }) => (
	<div className='form-check'>
		<input
			className='form-check-input'
			type='radio'
			name={ props.inputName }
			disabled={ props.currentFilter === props.whichShoeFilter }
			checked={ props.currentFilter === props.whichShoeFilter }
			onClick={ () => props.changeFilter(props.whichShoeFilter) }
		/>
		<label className='form-check-label'>
			{ props.labelText }
		</label>
	</div>
);

RadioButton.propTypes = {
	changeFilter: PropTypes.func.isRequired,
	inputName: PropTypes.string.isRequired,
	whichShoeFilter: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
}

export default RadioButton;