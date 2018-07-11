import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
   shouldComponentUpdate(nextProps) {
      if (nextProps.value !== this.props.value) {
         return true;
      }
      return false;
   }

   render() {
      return (
         <div className='form-group'>
            {this.props.label && <label>{this.props.label}</label>}
            <textarea
               className='form-control'
               value={this.props.value}
               onChange={e => this.props.onChange(e.target.value)}
               rows={this.props.rows}
            />
         </div>
      );
   }
}

TextArea.propTypes = {
   value: PropTypes.string.isRequired,
   rows: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired
};

export default TextArea;
