import React, { Component } from 'react';
import Slide from './Slide';
import './css/Carousel.css';
import { CAROUSEL_IMAGES } from '../../utilities/constants';

class Carousel extends Component {

	state = {
		imgNum: 1,
		animation: null
	}

	componentDidMount() {
		this.setState({
			animation: requestAnimationFrame(this.animate)
		});
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.state.animation);
	}

	animate = () => {
		setTimeout(() => {
			if (this.state.imgNum >= 36) {
				this.setState({
					imgNum: 1,
					animation: requestAnimationFrame(this.animate)
				});

			} else {
				this.setState({
					imgNum: this.state.imgNum + 1,
					animation: requestAnimationFrame(this.animate)
				});
			}
		}, 60)
	}

	render() {
		return (
			<section className='carousel-slider'>
				<div className='carousel-slider-inner'>
					{
						CAROUSEL_IMAGES.map(n =>
							<Slide
								key={ n }
								src={ `img${ n }.jpg` }
								isActive={ this.state.imgNum === n }
							/>
						)
					}
					{
						// <FontAwesomeIcon
						// 	className='carousel-arrow carousel-arrow-prev'
						// 	icon='chevron-left'
						// />
						// <FontAwesomeIcon
						// 	className='carousel-arrow carousel-arrow-next'
						// 	icon='chevron-right'
						// />
					}
				</div>
			</section>
		)
	}
}

export default Carousel;