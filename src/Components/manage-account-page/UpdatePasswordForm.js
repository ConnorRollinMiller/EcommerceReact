import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../form/Form';
import Input from '../form/Input';
import PrimaryButton from '../button/PrimaryButton';

class UpdatePasswordForm extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.user.UserId !== this.props.user.UserId) return true;
		if (nextProps.user.UserName !== this.props.user.UserName) return true;
		if (nextProps.user.Email !== this.props.user.Email) return true;
		if (nextProps.currentPassword !== this.props.currentPassword) return true;
		if (nextProps.newPassword !== this.props.newPassword) return true;
		if (nextProps.confirmNewPassword !== this.props.confirmNewPassword) return true;
		if (nextProps.error !== this.props.error) return true;
		if (nextProps.errorMessage !== this.props.errorMessage) return true;
		return false;
	}

	render() {
		return (
			<Form
				className='mb-4'
				onSubmit={ e => this.props.handleSubmitNewPassword(
					e,
					this.props.user.UserId,
					this.props.currentPassword,
					this.props.newPassword,
					this.props.confirmNewPassword
				) }>
				{
					this.props.error &&
					<div className='alert alert-danger'>
						{ this.props.errorMessage }
					</div>
				}
				<Input
					labelText='Current Password'
					type='password'
					name='currentPassword'
					placeholder='Current Password'
					value={ this.props.currentPassword }
					onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
				/>
				<Input
					labelText='New Password'
					type='text'
					name='newPassword'
					placeholder='Password'
					value={ this.props.newPassword }
					onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
				/>
				<Input
					labelText='Confirm Password'
					type='text'
					name='confirmNewPassword'
					placeholder='Confirm Password'
					value={ this.props.confirmNewPassword }
					onChange={ e => this.props.handleInputChange(e.target.name, e.target.value) }
				/>
				<PrimaryButton>
					Submit
            </PrimaryButton>
			</Form>
		);
	}
}

UpdatePasswordForm.propTypes = {}

export default UpdatePasswordForm;