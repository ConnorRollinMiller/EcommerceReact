import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/common/Loading';
import { Route, Switch, Redirect } from 'react-router-dom';

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
   <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/shop' component={ ShopPage } />
      <Route path='/shop/:shoeId' component={ ProductPage } />
      <Route path='/checkout' component={ CheckoutPage } />
      <Route path='/login' component={ LoginFormPage } />
      <Route path='/register' component={ RegisterFormPage } />
      <Route path='/account/settings' render={ () => {
         if (!props.user) return <Redirect to='/login' />
         else return <AccountSettingsPage />
      }
      } />
      <Route path='/account/orderHistory' render={ () => {
         if (!props.user) return <Redirect to='/login' />
         else return <OrderHistoryPage />
         // return <OrderHistoryPage />
      }
      } />
      <Route path='*' component={ PageNotFound } />
   </Switch>
);

export default Routes;
