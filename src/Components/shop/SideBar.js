import React from 'react';
import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';
import { Filters } from '../../redux/actions/actionTypes';
import FilterLink from './FilterLink';

import './css/SideBar.css';

const SideBar = ({ ...props }) => (
	<aside className='w-25 d-flex justify-content-center p-4'>
		<div className='my-4'>
			<form className='p-4'>
				<h4 className='text-capitalize'>Brand</h4>
				<hr />
				<FilterLink
					containerClassName='form-check'
					inputClassName='form-check-input'
					inputType='radio'
					inputName='brand'
					labelText='All'
					whichShoeFilter={ Filters.SHOW_ALL }
				/>
				<FilterLink
					containerClassName='form-check'
					inputClassName='form-check-input'
					inputType='radio'
					inputName='brand'
					labelText='Adidas'
					whichShoeFilter={ Filters.SHOW_ADIDAS }
				/>
				<FilterLink
					containerClassName='form-check'
					inputClassName='form-check-input'
					inputType='radio'
					inputName='brand'
					labelText='Jordan'
					whichShoeFilter={ Filters.SHOW_JORDAN }
				/>
				<FilterLink
					containerClassName='form-check'
					inputClassName='form-check-input'
					inputType='radio'
					inputName='brand'
					labelText='Nike'
					whichShoeFilter={ Filters.SHOW_NIKE }
				/>
			</form>
		</div>
	</aside>
);

const mapStateToProps = (state, ownProps) => {
	return {
		filter: state.shoeReducer.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeFilter: filter => dispatch(setShoeFilter(filter))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);