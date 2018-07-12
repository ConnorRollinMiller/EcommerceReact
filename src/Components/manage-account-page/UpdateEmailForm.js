import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import InputWithButton from '../form/InputWithButton';

class UpdateEmailForm extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.user.UserId !== this.props.user.UserId) return true;
		if (nextProps.user.UserName !== this.props.user.UserName) return true;
		if (nextProps.user.Email !== this.props.user.Email) return true;
		if (nextProps.newEmail !== this.props.newEmail) return true;
		if (nextProps.error !== this.props.error) return true;
		if (nextProps.errorMessage !== this.props.errorMessage) return true;
		return false;
	}

	render() {
		return (
			<Form
				className='mb-4'
				onSubmit={ e => this.props.handleSubmitNewEmail(
					e,
					this.props.user.UserId,
					this.props.newEmail
				) }>
				{
					this.props.error &&
					<div className='alert alert-danger'>
						{ this.props.errorMessage }
					</div>
				}
				<InputWithButton
					labelText='Email'
					placeholder='Email'
					type='text'
					name='newEmail'
					value={ this.props.newEmail }
					buttonText='Submit'
					onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
				/>
			</Form>
		);
	}
}

UpdateEmailForm.propTypes = {}

export default UpdateEmailForm;