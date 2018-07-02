import React, { Component } from 'react';
import RadioButton from '../form/RadioButton';
import './css/SideBar.css';

import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';
import { Filters } from '../../redux/actions';

class SideBar extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.filter !== this.props.filter) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<aside className='w-25 d-flex justify-content-center p-4'>
				<div className='my-4'>
					<form className='p-4'>
						<h4 className='text-capitalize'>Brand</h4>
						<hr className='sidebar-hr' />
						<RadioButton
							key='All'
							inputName='brand'
							labelText='All'
							currentFilter={ this.props.filter }
							whichShoeFilter={ Filters.SHOW_ALL }
							changeFilter={ this.props.changeFilter }
						/>
						<RadioButton
							key='Adidas'
							inputName='brand'
							labelText='Adidas'
							currentFilter={ this.props.filter }
							whichShoeFilter={ Filters.SHOW_ADIDAS }
							changeFilter={ this.props.changeFilter }
						/>
						<RadioButton
							key='Jordan'
							inputName='brand'
							labelText='Jordan'
							currentFilter={ this.props.filter }
							whichShoeFilter={ Filters.SHOW_JORDAN }
							changeFilter={ this.props.changeFilter }
						/>
						<RadioButton
							key='Nike'
							inputName='brand'
							labelText='Nike'
							currentFilter={ this.props.filter }
							whichShoeFilter={ Filters.SHOW_NIKE }
							changeFilter={ this.props.changeFilter }
						/>
					</form>
				</div>
			</aside>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	filter: state.shoeReducer.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeFilter: filter => dispatch(setShoeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);