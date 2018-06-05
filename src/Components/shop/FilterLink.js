import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';
import Link from './Link';

const mapStateToProps = (state, ownProps) => {
	return {
		currentFilter: state.shoeReducer.filter,
		...ownProps
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeFilter: filter => dispatch(setShoeFilter(filter))
	}
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink