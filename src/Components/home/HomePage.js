import React from 'react';
import PropTypes from 'prop-types';
import HomeSlider from './HomeSlider'
import FilterProductList from '../product/FilterProductList';
import AdditionalInfoContainer from './AdditionalInfoContainer';
import BrandList from './BrandList';
import Newsletter from './Newsletter';

import { setShoeFilter } from '../../redux/actions/shoesAction';
import { Filters } from '../../redux/actions/actionTypes';
import { connect } from 'react-redux';

// const HomePage = ({ ...props }) => (
// 	<main>
// 		<HomeSlider />
// 		<BrandList />
// 		<FilterProductList sectionTitle='Featured Shoes' />
// 		<Newsletter />
// 		<AdditionalInfoContainer />
// 	</main>
// );

class HomePage extends React.Component {
	render() {
		if (this.props.shoes && this.props.filter !== Filters.SHOW_FEATURED) {
			this.props.changeFilter(Filters.SHOW_FEATURED);
		}
		return (
			<main>
				<HomeSlider />
				<BrandList />
				<FilterProductList sectionTitle='Featured Shoes' />
				<Newsletter />
				<AdditionalInfoContainer />
			</main>
		)
	}
}

HomePage.propTypes = {
	shoes: PropTypes.array,
	filter: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
	return {
		shoes: state.shoeReducer.shoes,
		filter: state.shoeReducer.filter,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeFilter: filter => dispatch(setShoeFilter(filter))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
