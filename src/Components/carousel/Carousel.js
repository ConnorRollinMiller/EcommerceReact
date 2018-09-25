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
      if (!this.state.animation) {
         this.setState({
            animation: window.requestAnimationFrame(this.animate)
         });
      }
   }

   componentWillUnmount() {
      if (this.state.animation) {
         this.setState({ animation: null })
         window.cancelAnimationFrame(this.state.animation);
      }
   }

   animate = () => {
      setTimeout(() => {
         if (this.state.imgNum >= 36) {
            this.setState({
               imgNum: 1,
               animation: window.requestAnimationFrame(this.animate)
            });

         } else {
            this.setState(prevState => ({
               imgNum: prevState.imgNum + 1,
               animation: window.requestAnimationFrame(this.animate)
            }));
         }
      }, 1000 / 20)
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
            </div>
         </section>
      )
   }
}

export default Carousel;