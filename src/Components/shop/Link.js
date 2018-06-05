import React from 'react';
import PropTypes from 'prop-types';

const RadioLink = ({ ...props }) => (
	<div className={ props.containerClassName }>
		{
			props.inputType !== 'radio'
			&&
			<label className='form-check-label'>
				{ props.labelText }
			</label>
		}

		<input
			className={ props.inputClassName }
			type={ props.inputType }
			name={ props.inputName }
			disabled={ props.currentFilter === props.whichShoeFilter }
			checked={ props.currentFilter === props.whichShoeFilter }
			onClick={ () => props.changeFilter(props.whichShoeFilter) }
		/>

		{
			props.inputType === 'radio'
			&&
			<label className='form-check-label'>
				{ props.labelText }
			</label>
		}
	</div>
);

RadioLink.propTypes = {
	changeFilter: PropTypes.func.isRequired,
	containerClassName: PropTypes.string.isRequired,
	inputClassName: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	currentFilter: PropTypes.string.isRequired,
	whichShoeFilter: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
}

export default RadioLink;