import React from 'react';
import AdditionalInfoCard from './AdditionalInfoCard';

const AdditionalInfoContainer = () => (
   <section className='container-fluid my-2 p-4'>
      <div className='row justify-content-center align-items-stretch p-4'>
         <AdditionalInfoCard iconName='truck' title='Shipping Info' text='Free shipping on orders over $35' />
         <AdditionalInfoCard iconName='thumbs-up' title='Returns & Exchanges' text='100% satisfaction guarenteed' />
         <AdditionalInfoCard iconName='lock' title='Secure Checkout' text='Shop here with confidence' />
         <AdditionalInfoCard iconName='envelope' title='Have a Question?' text='Email@example.com' />
      </div>
   </section>
);

export default AdditionalInfoContainer;