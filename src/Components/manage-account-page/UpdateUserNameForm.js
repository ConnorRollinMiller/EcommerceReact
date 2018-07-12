import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import InputWithButton from '../form/InputWithButton';

class UpdateUserNameForm extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.user.UserId !== this.props.user.UserId) return true;
		if (nextProps.user.UserName !== this.props.user.UserName) return true;
		if (nextProps.user.Email !== this.props.user.Email) return true;
		if (nextProps.newUsername !== this.props.newUsername) return true;
		if (nextProps.error !== this.props.error) return true;
		if (nextProps.errorMessage !== this.props.errorMessage) return true;
		return false
	}

	render() {
		return (
			<Form
				className='mt-4'
				onSubmit={ e => this.props.handleSubmitNewUserName(
					e,
					this.props.user.UserId,
					this.props.user.UserName,
					this.props.newUsername
				) }>
				{
					this.props.error &&
					<div className='alert alert-danger'>
						{ this.props.errorMessage }
					</div>
				}
				<InputWithButton
					labelText='Username'
					placeholder='Username'
					type='text'
					name='newUsername'
					value={ this.props.newUsername }
					buttonText='Submit'
					onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
				/>
			</Form>
		);
	}
}

UpdateUserNameForm.propTypes = {}

export default UpdateUserNameForm;