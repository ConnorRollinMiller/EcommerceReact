import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './css/TopHeader.css';

class TopHeader extends Component {
   shouldComponentUpdate(nextProps) {
      return false;
   }

   render() {
      return (
         <div className='navbar text-center p-0' id='top-header'>
            <div className='container py-2'>
               <ul className='nav' id='top-header-nav'>
                  <li className='m-auto'>
                     <FontAwesomeIcon
                        className='top-header-icon'
                        icon={ [ 'fa', 'box-open' ] }
                     />
                     <span className='secondary-color'>Free </span>
                     Shipping On All Orders
                     <span className='secondary-color'> Over $35</span>
                  </li>

                  <li className='nav-seperator d-none d-lg-block' />

                  <li className='m-auto d-none d-lg-block'>
                     <FontAwesomeIcon
                        className='top-header-icon'
                        icon={ [ 'fas', 'paper-plane' ] }
                     />
                     Support
                     <span className='secondary-color'> Email@example.com</span>
                  </li>

                  <li className='nav-seperator d-none d-sm-block' />

                  <li className='m-auto d-none d-sm-block'>
                     <a className='top-header-social'
                        href='https://www.facebook.com'
                        target='_blank'
                        rel="noopener noreferrer">
                        <FontAwesomeIcon
                           className='top-header-icon-link'
                           icon={ [ 'fab', 'facebook' ] }
                        />
                     </a>
                     <a className='top-header-social'
                        href='https://www.instagram.com'
                        target='_blank'
                        rel="noopener noreferrer">
                        <FontAwesomeIcon
                           className='top-header-icon-link'
                           icon={ [ 'fab', 'instagram' ] }
                        />
                     </a>
                     <a className='top-header-social'
                        href='https://www.twitter.com'
                        target='_blank'
                        rel="noopener noreferrer">
                        <FontAwesomeIcon
                           className='top-header-icon-link'
                           icon={ [ 'fab', 'twitter' ] }
                        />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default TopHeader;
