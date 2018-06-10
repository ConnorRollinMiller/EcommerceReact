import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../icon/CloseIcon';
import QuickviewDetails from './QuickviewDetails';
import PrimaryButton from '../button/PrimaryButton';
import Select from '../form/Select';
import './css/ProductQuickview.css';

import { closeQuickview, setShoeSize } from '../../redux/actions/shoesAction';
import { addToCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const sizes = [ 'Select Size', 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5 ]

class ProductQuickview extends Component {

	componentDidMount() {
		document.body.style = 'overflow: hidden';
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoe !== this.props.shoe) {
			return true;
		} else if (nextProps.errorMessage !== this.props.errorMessage) {
			return true;
		}
		return false;
	}

	componentWillUnmount() {
		document.body.style = 'overflow: auto';
	}

	addToCart = (shoe) => {
		this.props.addToCart(shoe);
		if (shoe.size) {
			this.props.closeQuickview();
		}
	}

	render() {
		return (
			<div className='quickview-bg d-flex justify-content-center align-items-center p-4'>
				<article className='quickview-product-container rounded mx-4'>
					<CloseIcon
						className='quickview-icon'
						size='3x'
						onClick={ () => this.props.closeQuickview() }
					/>
					<img
						className='img-fluid w-50'
						src={ `${ this.props.shoe.ImageFolderURL }/1.jpg` }
						alt={ `${ this.props.shoe.Model } ${ this.props.shoe.Colorway }` }
					/>
					<div className='w-50 text-center text-uppercase'>
						<QuickviewDetails shoe={ this.props.shoe } />
						<Select
							className='w-50 mx-auto my-3'
							options={ sizes }
							onChange={ (e) => this.props.changeShoeSize(e.target.value) }
						/>
						{
							this.props.errorMessage &&
							<p className='text-danger text-capitalize mb-3'>{ this.props.errorMessage }</p>
						}
						<PrimaryButton
							className='w-50'
							onClick={ () => this.addToCart(this.props.shoe) }>
							Add To Cart
							</PrimaryButton>
					</div>
				</article>
			</div>
		)
	}
}

ProductQuickview.propTypes = {
	addToCart: PropTypes.func.isRequired,
	closeQuickview: PropTypes.func.isRequired,
	shoe: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	shoe: state.shoeReducer.quickviewShoe,
	errorMessage: state.cartReducer.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
	addToCart: shoe => dispatch(addToCart(shoe)),
	changeShoeSize: size => dispatch(setShoeSize(size)),
	closeQuickview: () => dispatch(closeQuickview()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductQuickview);