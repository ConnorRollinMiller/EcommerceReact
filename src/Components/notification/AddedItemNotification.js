import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItemAddedNotificaton extends Component {

	state = {
		opacity: 1,
		display: true
	}

	componentDidMount() {
		this.alert;
	}

	componentWillUnmoount() {

	}

	fadeOutEffect = () => {
		let fadeEffect = setInterval(() => {
			if (!this.alert.style.opacity) {
				this.alert.style.opacity = 1;
			}
			if (this.alert.style.opacity > 0) {
				this.alert.style.opacity -= 0.1;
			} else {
				clearInterval(fadeEffect);
				this.setState({ display: false });
			}
		}, 200);
	}

	render() {
		return (
			{
				this.state.display ?
					(
						<div className='alert alert-success' ref={ (el) => this.alert = el }>
							A simple success alert—check it out!
						</div>
					) : null
			}
		);
	}
}

CartItemAddedNotificaton.propTypes = {}

export default CartItemAddedNotificaton;