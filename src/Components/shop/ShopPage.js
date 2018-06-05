import React from 'react';
import PageTitle from '../common/PageTitle';
import FilterProductList from '../product/FilterProductList';
import SideBar from './SideBar';
import './css/Shop.css';
import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';
import { Filters } from '../../redux/actions/actionTypes';

// const ShopPage = ({ ...props }) => (
// 	<div>
// 		<PageTitle />
// 		<div className='container-fluid'>
// 			<div className='row'>
// 				<SideBar />
// 				<main className='w-75'>
// 					<FilterProductList />
// 				</main>
// 			</div>
// 		</div>
// 	</div>
// );

class ShopPage extends React.Component {
	render() {
		console.log(this.props);
		if (this.props.filter === Filters.SHOW_FEATURED) {
			this.props.changeFilter(Filters.SHOW_ALL);
		}
		return (
			<div>
				<PageTitle />
				<div className='container-fluid'>
					<div className='row'>
						<SideBar />
						<main className='w-75'>
							<FilterProductList />
						</main>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	shoes: state.shoeReducer.shoes,
	filter: state.shoeReducer.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeFilter: filter => dispatch(setShoeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);