import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../carousel/Carousel';
import FilterProductList from '../product-card/FilterProductList';
import AdditionalInfoContainer from './AdditionalInfoContainer';
import BrandList from './BrandList';
import Newsletter from './Newsletter';
import Quickview from '../quickview/Quickview';

import { setShoeFilter } from '../../redux/actions/shoesAction';
import { Filters } from '../../redux/actions/actionTypes';
import { connect } from 'react-redux';

class HomePage extends Component {

	componentDidMount() {
		if (this.props.shoes) {
			this.props.changeFilter(Filters.SHOW_FEATURED);
		}
		window.scrollTo(0, 0);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.quickviewOpen !== this.props.quickviewOpen) {
			return true;
		} else if (nextProps.shoes !== this.props.shoes) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<main className='main-section'>
				<Carousel />
				<BrandList />
				<FilterProductList
					sectionTitle='Featured Shoes'
					shoes={ this.props.shoes }
				/>
				<Newsletter />
				<AdditionalInfoContainer />
				{
					this.props.quickviewOpen &&
					<Quickview />
				}
			</main>
		)
	}
}

HomePage.propTypes = {
	shoes: PropTypes.array,
	quickviewOpen: PropTypes.bool.isRequired
}

HomePage.defaultProps = {
	shoes: [],
	quickviewOpen: false
}

const mapStateToProps = (state, ownProps) => ({
	shoes: state.shoeReducer.shoes,
	quickviewOpen: state.shoeReducer.quickviewOpen,
});

const mapDispatchToProps = (dispatch) => ({
	changeFilter: filter => dispatch(setShoeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
