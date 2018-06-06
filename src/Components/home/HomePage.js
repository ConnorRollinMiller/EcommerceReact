import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HomeSlider from './HomeSlider'
import FilterProductList from '../product/FilterProductList';
import AdditionalInfoContainer from './AdditionalInfoContainer';
import BrandList from './BrandList';
import Newsletter from './Newsletter';
import ProductQuickview from '../quickview/ProductQuickview';

import { setShoeFilter, closeQuickview } from '../../redux/actions/shoesAction';
import { addToCart } from '../../redux/actions/cartActions';
import { Filters } from '../../redux/actions/actionTypes';
import { connect } from 'react-redux';



class HomePage extends PureComponent {

	componentDidMount() {
		if (this.props.shoes) {
			this.props.changeFilter(Filters.SHOW_FEATURED);
		}
	}

	render() {
		return (
			<main>
				<HomeSlider />
				<BrandList />
				<FilterProductList sectionTitle='Featured Shoes' />
				<Newsletter />
				<AdditionalInfoContainer />
				{
					this.props.quickviewOpen &&
					<ProductQuickview
						addToCart={ this.props.addToCart }
						closeQuickview={ this.props.closeQuickview }
						shoe={ this.props.quickviewShoe }
					/>
				}
			</main>
		)
	}
}

HomePage.propTypes = {
	shoes: PropTypes.array,
	filter: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	shoes: state.shoeReducer.shoes,
	filter: state.shoeReducer.filter,
	quickviewShoe: state.shoeReducer.quickviewShoe,
	quickviewOpen: state.shoeReducer.quickviewOpen
});

const mapDispatchToProps = (dispatch) => ({
	changeFilter: filter => dispatch(setShoeFilter(filter)),
	addToCart: shoe => dispatch(addToCart(shoe)),
	closeQuickview: () => dispatch(closeQuickview())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
