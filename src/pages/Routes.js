import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/common/Loading';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import withUser from '../HOC/withUser';


const HomePage = Loadable({
   loader: () => import('./HomePage'),
   loading: Loading
});

const ShopPage = Loadable({
   loader: () => import('./ShopPage'),
   loading: Loading
});

const ProductPage = Loadable({
   loader: () => import('./ProductPage'),
   loading: Loading
});

const CheckoutPage = Loadable({
   loader: () => import('./CheckoutPage'),
   loading: Loading
});

const LoginFormPage = Loadable({
   loader: () => import('./LoginFormPage'),
   loading: Loading
});

const RegisterFormPage = Loadable({
   loader: () => import('./RegisterFormPage'),
   loading: Loading
});

const AccountSettingsPage = Loadable({
   loader: () => import('./AccountSettingsPage'),
   loading: Loading
});

const PageNotFound = Loadable({
   loader: () => import('./PageNotFound'),
   loading: Loading
});

const OrderHistoryPage = Loadable({
   loader: () => import('./OrderHistoryPage'),
   loading: Loading
})

const Routes = ({ ...props }) => (
   <TransitionGroup className='transition-group'>
      <CSSTransition
         key={ props.location.pathname }
         classNames='pageSlider'
         timeout={ { enter: 600, exit: 0 } }
         mountOnEnter={ true }
         unmountOnExit={ true }>
         <main className='main-section d-flex flex-column justify-content-center align-items-stretch'>
            <Switch location={ props.location }>
               <Route exact path='/' component={ HomePage } />
               <Route exact path='/shop' component={ ShopPage } />
               <Route path='/shop/:shoeId' component={ ProductPage } />
               <Route path='/checkout' component={ CheckoutPage } />
               <Route path='/login' component={ LoginFormPage } />
               <Route path='/register' component={ RegisterFormPage } />
               <Route path='/account/settings' component={ withUser(AccountSettingsPage) } />
               <Route path='/account/orderHistory' component={ withUser(OrderHistoryPage) } />
               <Route path='*' component={ PageNotFound } />
            </Switch>
         </main>
      </CSSTransition>
   </TransitionGroup>
);

export default Routes;
