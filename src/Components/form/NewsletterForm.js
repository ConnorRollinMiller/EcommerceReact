import React, { Component } from 'react';
import './css/NewsletterForm.css';

class Newsletter extends Component {

   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <section className='newsletter container-fluid py-4'>
            <form
               className='container-fluid py-4'
               onSubmit={ e => e.preventDefault() }>
               <div className='text-white text-uppercase text-center'>
                  <h3 className='d-none d-sm-block'>
                     Suscribe for deals & new product releases
                  </h3>
                  <h4 className='font-weight-light'>
                     Sign Up now and get 10% off
                  </h4>
               </div>
               <div className='col-12 col-md-6 input-group input-group-lg px-0 mt-4 mx-auto'>
                  <input
                     type='email'
                     className='form-control'
                     placeholder='Your Email'
                  />
                  <div className='input-group-append'>
                     <button className='btn btn-primary'>Submit</button>
                  </div>
               </div>
            </form>
         </section>
      );
   }
}

export default Newsletter;
