import React from 'react';
import Slide from './Slide';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/Carousel.css';

// const Carousel = ({ ...props }) => (
// 	<section className='carousel-slider align-items-center'>
// 		<Slide src='img1.jpg' alt='' isActive={ true }>

// 		</Slide>
// 		<FontAwesomeIcon
// 			className='carousel-arrow carousel-arrow-prev'
// 			icon='chevron-left'
// 		/>
// 		<FontAwesomeIcon
// 			className='carousel-arrow carousel-arrow-next'
// 			icon='chevron-right'
// 		/>
// 	</section>
// );

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ];

class Carousel extends React.PureComponent {

	state = {
		imgNum: 1,
	}

	componentDidMount() {
		requestAnimationFrame(this.increment);
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.increment);
	}

	increment = () => {
		setTimeout(() => {
			if (this.state.imgNum >= 36) {
				this.setState({ imgNum: 1 });
				requestAnimationFrame(this.increment);
				return;
			}
			this.setState({ imgNum: this.state.imgNum + 1 });
			requestAnimationFrame(this.increment);
		}, 60)
	}

	render() {
		return (
			<section className='carousel-slider align-items-center'>
				<div>
					{
						numbers.map(n => <Slide key={ n } src={ `img${ n }.jpg` } alt='' isActive={ this.state.imgNum === n } />)
					}
					<FontAwesomeIcon
						className='carousel-arrow carousel-arrow-prev'
						icon='chevron-left'
					/>
					<FontAwesomeIcon
						className='carousel-arrow carousel-arrow-next'
						icon='chevron-right'
					/>
				</div>
			</section>
		)
	}
}

export default Carousel;