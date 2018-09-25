import React from 'react';
import PropTypes from 'prop-types';
import './css/BrandCard.css';
import LinkComponent from '../common/LinkComponent';
import { connect } from 'react-redux';
import { setShoeFilter } from '../../redux/actions/shoesAction';

const BrandCard = ({ ...props }) => (
   <div
      className='col-10 col-sm-4 p-4 d-flex justify-content-stretch align-items-stretch mx-auto'
      onClick={ () => props.changeFilter(props.whichFilter) }>
      <LinkComponent
         className='brand-card d-flex justify-content-center align-items-center p-4 rounded'
         to='/shop'>
         <img className='img-fluid' src={ `images/Brands/${ props.imgSource }` } alt={ props.brandName + ' logo' } width="90%" />
         <div className='brand-card-hover'>
            <h3 className='text-uppercase h2'>{ props.brandName }</h3>
         </div>
      </LinkComponent>
   </div>
);

BrandCard.propTypes = {
   imgSource: PropTypes.string.isRequired,
   brandName: PropTypes.string.isRequired,
   changeFilter: PropTypes.func.isRequired,
   whichFilter: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch) => ({
   changeFilter: filter => dispatch(setShoeFilter(filter))
});

export default connect(null, mapDispatchToProps)(BrandCard);