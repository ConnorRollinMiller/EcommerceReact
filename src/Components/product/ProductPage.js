import React, { Component } from 'react';
import PageTitle from '../common/PageTitle';
import ProductImageContainer from './ProductImageContainer';
import ProductDetailsContainer from './ProductDetailsContainer';

import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
import { fetchShoeById } from '../../redux/actions/shoesAction';

class ProductPage extends Component {

	componentDidMount() {
		this.props.fetchShoeById(this.props.shoeId);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoe !== this.props.shoe) {
			return true;
		} else if (nextProps.shoeId !== this.props.shoeId) {
			return true;
		}
		return false;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.shoeId !== this.props.shoeId) {
			this.props.fetchShoeById(this.props.shoeId);
		}
	}

	render() {
		return (
			<main className='main-section'>
				<PageTitle displayPageTitle={ false } />
				<div className='container-fluid'>
					{
						this.props.shoe ?
							(
								<div className='container py-4 d-flex justify-content-center align-items-stretch'>
									<ProductImageContainer
										shoe={ this.props.shoe }
									/>
									<ProductDetailsContainer
										shoe={ this.props.shoe }
										addToCart={ this.props.addToCart }
									/>
								</div>
							) : null
					}
				</div>
			</main>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	shoeId: Number(ownProps.match.params.shoeId),
	shoe: state.shoeReducer.shoe
});

const mapDispatchToProps = (dispatch) => ({
	fetchShoeById: (id) => dispatch(fetchShoeById(id)),
	addToCart: (shoe) => dispatch(addToCart(shoe))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);