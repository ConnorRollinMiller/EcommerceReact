import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioButton extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.currentFilter !== this.props.currentFilter) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name={ this.props.inputName }
					disabled={ this.props.currentFilter === this.props.whichShoeFilter }
					checked={ this.props.currentFilter === this.props.whichShoeFilter }
					onClick={ () => this.props.changeFilter(this.props.whichShoeFilter) }
				/>
				<label className='form-check-label'>
					{ this.props.labelText }
				</label>

			</div>
		)
	}
}

RadioButton.propTypes = {
	changeFilter: PropTypes.func.isRequired,
	inputName: PropTypes.string.isRequired,
	currentFilter: PropTypes.string.isRequired,
	whichShoeFilter: PropTypes.string.isRequired,
	labelText: PropTypes.string.isRequired,
}

export default RadioButton;