import React from 'react';
import Slide from './Slide';
import './css/Carousel.css';
import { CAROUSEL_IMAGES } from '../../utilities/constants';

class Carousel extends React.PureComponent {

	state = {
		imgNum: 1,
		request: null
	}

	componentDidMount() {
		requestAnimationFrame(this.animate);
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.frameId);
	}

	animate = () => {
		setTimeout(() => {
			if (this.state.imgNum >= 36) {
				this.setState({ imgNum: 1 });
				requestAnimationFrame(this.animate);
				return;
			}
			this.setState({ imgNum: this.state.imgNum + 1 });
			requestAnimationFrame(this.animate);
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
							/>)
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