import React, { Component } from 'react';
import PageTitle from '../common/PageTitle';
import FilterProductList from '../product-card/FilterProductList';
import SideBar from './SideBar';
import Quickview from '../quickview/Quickview';
import './css/Shop.css';

import { connect } from 'react-redux';
import { setShoeFilter, closeQuickview } from '../../redux/actions/shoesAction';
import { addToCart } from '../../redux/actions/cartActions';
import { Filters } from '../../redux/actions';

class ShopPage extends Component {

	state = {}

	static getDerivedStateFromProps(props, state) {
		if (props.filter === Filters.SHOW_FEATURED) {
			return {
				filter: props.changeFilter(Filters.SHOW_ALL)
			}
		}
		return null;
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoes !== this.props.shoes) {
			return true;
		} else if (nextProps.filter !== this.props.filter) {
			return true;
		} else if (nextProps.quickviewOpen !== this.props.quickviewOpen) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<main className='main-section'>
				<PageTitle />
				<div className='container-fluid'>
					<div className='row'>
						<SideBar />
						<main className='w-75'>
							<FilterProductList />
						</main>
					</div>
				</div>
				{
					this.props.quickviewOpen &&
					<Quickview
						addToCart={ this.props.addToCart }
						closeQuickview={ this.props.closeQuickview }
						shoe={ this.props.quickviewShoe }
					/>
				}
			</main>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	shoes: state.shoeReducer.shoes,
	filter: state.shoeReducer.filter,
	quickviewShoe: state.shoeReducer.quickviewShoe,
	quickviewOpen: state.shoeReducer.quickviewOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	changeFilter: filter => dispatch(setShoeFilter(filter)),
	addToCart: shoe => dispatch(addToCart(shoe)),
	closeQuickview: () => dispatch(closeQuickview())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);