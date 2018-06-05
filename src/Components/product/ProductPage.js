import React, { Component } from 'react';
import PageTitle from '../common/PageTitle';
import { connect } from 'react-redux';
import { getShoeById, emptyShoeState } from '../../redux/actions/shoesAction';

import ProductImageContainer from './ProductImageContainer';
import ProductDetailsContainer from './ProductDetailsContainer';

class ProductPage extends Component {

	componentDidMount() {
		this.props.getShoeById(this.props.shoeId);
	}

	componentWillUnmount() {
		this.props.resetShoe();
	}

	render() {
		return (
			<div>
				<PageTitle displayPageTitle={ false } />
				<div className='container-fluid'>
					<div className='container py-4 d-flex justify-content-center align-items-stretch'>
						{ this.props.shoe && <ProductImageContainer shoe={ this.props.shoe } /> }
						{ this.props.shoe && <ProductDetailsContainer shoe={ this.props.shoe } /> }
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {

	const shoeId = Number(ownProps.match.params.shoeId);

	return {
		shoeId: shoeId,
		shoes: state.shoeReducer.shoes,
		shoe: state.shoeReducer.shoe
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getShoeById: (shoes, id) => dispatch(getShoeById(shoes, id)),
		resetShoe: () => dispatch(emptyShoeState())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);