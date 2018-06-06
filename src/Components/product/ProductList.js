import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../common/SectionTitle';
import ProductCard from './ProductCard';
import './css/ProductList.css';

class ProductList extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.shoes !== this.props.shoes) {
			return true;
		} else if (nextProps.filter !== this.props.filter) {
			return true;
		} else if (nextProps.sectionTitle !== this.props.sectionTitle && this.props.sectionTitle) {
			return true;
		}
		return false;
	}

	render() {
		return (
			<section className='py-4'>
				<div className='container'>
					{
						this.props.sectionTitle &&
						<SectionTitle title={ this.props.sectionTitle } />
					}
					<div className='row justify-content-center py-4 m-0 w-100'>
						{
							this.props.shoes &&
							this.props.shoes.map(shoe =>
								<ProductCard
									key={ shoe.shoeId }
									shoe={ shoe }
									addToCart={ this.props.addToCart }
									showQuickview={ this.props.showQuickview }
								/>
							)
						}
					</div>
				</div>
			</section>
		)
	}
}

ProductList.propTypes = {
	sectionTitle: PropTypes.string,
	shoes: PropTypes.array,
	addToCart: PropTypes.func.isRequired,
	showQuickview: PropTypes.func.isRequired
}

export default ProductList;