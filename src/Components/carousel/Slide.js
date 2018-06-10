import React from 'react';
import PropTypes from 'prop-types';
import './css/Slide.css';

// class Slide extends React.PureComponent {
// 	render() {
// 		return (
// 			<div
// 				className='slide p-4'
// 				style={
// 					{
// 						backgroundImage: `url(images/Carousel/360-AirJordan4/${ this.props.src })`,
// 						display: this.props.isActive ? 'block' : 'none'
// 					}
// 				}>
// 				{
// 					this.props.children &&
// 					(
// 						<div className=''>
// 							{ this.props.children }
// 						</div>
// 					)
// 				}
// 			</div>
// 		);
// 	}
// }

const Slide = ({ ...props }) => (
	<div
		className='slide p-4'
		style={
			{
				backgroundImage: `url(images/Carousel/360-AirJordan4/${ props.src })`,
				display: props.isActive ? 'block' : 'none'
			}
		}>
		{
			props.children &&
			(
				<div className=''>
					{ props.children }
				</div>
			)
		}
	</div>
)

Slide.propTypes = {
	children: PropTypes.element,
	isActive: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired
}

export default Slide;