import React from 'react';
import PropTypes from 'prop-types';
import './css/BrandCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';

const BrandCard = ({ ...props }) => (
	<div className='col-sm-4 p-2 d-flex justify-content-stretch align-items-stretch'>
		<Link className='brand-card d-flex justify-content-center align-items-center p-4' to='/shop' onClick={ () => props.changeFilter(props.whichFilter) }>
			<img className='img-fluid' src={ `images/Brands/${ props.imgSource }` } alt={ props.brandName + ' logo' } />
			<div className='brand-card-hover'>
				<h3 className='text-uppercase'>{ props.brandName }</h3>
			</div>
		</Link>
	</div>
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