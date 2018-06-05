import ProductList from './ProductList';
import { connect } from 'react-redux'
import { Filters } from '../../redux/actions/actionTypes';

const getQualifiedShoes = (shoes, filter) => {
	switch (filter) {
		case Filters.SHOW_ALL:
			return shoes;
		case Filters.SHOW_FEATURED:
			return shoes.filter(s => s.featured === true);
		case Filters.SHOW_ADIDAS:
			return shoes.filter(s => s.brand === 'Adidas');
		case Filters.SHOW_JORDAN:
			return shoes.filter(s => s.brand === 'Jordan');
		case Filters.SHOW_NIKE:
			return shoes.filter(s => s.brand === 'Nike');
		default:
			throw Error('Unknown filter => ' + filter);
	}
}

const mapStateToProps = (state, ownProps) => ({
	sectionTitle: ownProps.sectionTitle,
	shoes: getQualifiedShoes(state.shoeReducer.shoes, state.shoeReducer.filter)
});

const FilterProductList = connect(mapStateToProps)(ProductList);

export default FilterProductList;