import React, { PureComponent } from 'react';
import './css/Newsletter.css';

class Newsletter extends PureComponent {
	render() {
		return (
			<section className='newsletter container-fluid py-4'>
				<form className='container py-4' onSubmit={ (e) => e.preventDefault() }>
					<div className='text-white text-uppercase text-center'>
						<h3>Suscribe for deals & new product releases</h3>
						<h4 className='font-weight-light'>Sign Up now and get 10% off</h4>
					</div>
					<div className='input-group input-group-lg mt-4 mx-auto w-50'>
						<input type='email' className='form-control' placeholder='Your Email' />
						<div className='input-group-append'>
							<button className='btn btn-primary'>Submit</button>
						</div>
					</div>
				</form>
			</section>
		);
	}
}

export default Newsletter;