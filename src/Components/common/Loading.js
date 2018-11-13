import React from 'react';

const Loading = ({ ...props }) => {
   if (props.error) {
      return (
         <div className='alert alert-danger'>
            Error: { props.error }!
			</div>
      )
   } else {
      return (
         <div className='text-center'>
            <h2>Loading...</h2>
         </div>
      );
   }
};

export default Loading;