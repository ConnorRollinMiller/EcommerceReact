import React, { Suspense, lazy } from 'react';
import Loading from '../components/common/Loading';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import withUser from '../HOC/withUser';

const HomePage = lazy(() => import('./HomePage'));

const ShopPage = lazy(() => import('./ShopPage'));

const ProductPage = lazy(() => import('./ProductPage'));

const CheckoutPage = lazy(() => import('./CheckoutPage'));

const LoginFormPage = lazy(() => import('./LoginFormPage'));

const RegisterFormPage = lazy(() => import('./RegisterFormPage'));

const AccountSettingsPage = lazy(() => import('./AccountSettingsPage'));

const PageNotFound = lazy(() => import('./PageNotFound'));

const OrderHistoryPage = lazy(() => import('./OrderHistoryPage'));

const Routes = ({ ...props }) => (
   <TransitionGroup className='transition-group'>
      <CSSTransition
         key={ props.location.pathname }
         classNames='pageSlider'
         timeout={ { enter: 600, exit: 0 } }
         mountOnEnter={ true }
         unmountOnExit={ true }>
         <main className='main-section d-flex flex-column justify-content-center align-items-stretch'>
            <Suspense fallback={ <Loading /> }>
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
            </Suspense>
         </main>
      </CSSTransition>
   </TransitionGroup>
);

export default Routes;
