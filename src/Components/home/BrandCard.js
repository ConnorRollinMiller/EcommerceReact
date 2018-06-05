import React from 'react';
import PropTypes from 'prop-types';
import './css/BrandCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';

const BrandCard = ({ ...props }) => (
	<Link className='brand-card p-4' to='/shop' onClick={ () => props.changeFilter(props.whichFilter) }>
		<img className='img-fluid' src={ props.imgSource } alt={ props.brandName + ' logo' } />
		<div className='brand-card-hover'>
			<h3 className='text-uppercase'>{ props.brandName }</h3>
		</div>
	</Link>
);

BrandCard.propTypes = {
	imgSource: PropTypes.string.isRequired,
	brandName: PropTypes.string.isRequired,
	changeFilter: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
	return {
		...ownProps
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeFilter: filter => dispatch(setShoeFilter(filter))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandCard);