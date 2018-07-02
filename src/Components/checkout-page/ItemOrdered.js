import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemOrdered extends Component {
   shouldComponentUpdate(nexProps) {
      return false;
   }

   render() {
      return (
         <article className="media align-items-center text-center mb-2">
            <img
               className="col-3 pl-0"
               src={`${this.props.shoe.ImageFolderURL}/1.jpg`}
               alt={`${this.props.shoe.Brand} ${this.props.shoe.Colorway}`}
            />
            <div className="col-6 media-body text-center">
               <a className="h5" href={`/shop/${this.props.shoe.ShoeId}`}>
                  <p className="mb-0">{this.props.shoe.Brand}</p>
                  <p className="mb-0">{this.props.shoe.Colorway}</p>
               </a>
            </div>
            <div className="col-3">
               <p className="font-weight-bold">${this.props.shoe.Price}</p>
            </div>
         </article>
      );
   }
}

ItemOrdered.propTypes = {
   shoe: PropTypes.object.isRequired
};

export default ItemOrdered;
