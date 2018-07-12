import React from 'react';
import Loadable from 'react-loadable';
import Loading from './Components/common/Loading';
import { Route, Switch } from 'react-router-dom';

const HomePage = Loadable({
   loader: () => import('./Components/home-page/HomePage'),
   loading: Loading
});

const ShopPage = Loadable({
   loader: () => import('./Components/shop-page/ShopPage'),
   loading: Loading
});

const ProductPage = Loadable({
   loader: () => import('./Components/product-page/ProductPage'),
   loading: Loading
});

const CheckoutPage = Loadable({
   loader: () => import('./Components/checkout-page/CheckoutPage'),
   loading: Loading
});

const LoginFormPage = Loadable({
   loader: () => import('./Components/login-register-page/LoginFormPage'),
   loading: Loading
});

const RegisterFormPage = Loadable({
   loader: () => import('./Components/login-register-page/RegisterFormPage'),
   loading: Loading
});

const ManageAccountPage = Loadable({
   loader: () => import('./Components/manage-account-page/ManageAccountPage'),
   loading: Loading
});

const PageNotFound = Loadable({
   loader: () => import('./Components/common/PageNotFound'),
   loading: Loading
});

const Routes = ({ ...props }) => (
   <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/shop' component={ ShopPage } />
      <Route path='/shop/:shoeId' component={ ProductPage } />
      <Route path='/checkout' component={ CheckoutPage } />
      <Route path='/login' component={ LoginFormPage } />
      <Route path='/register' component={ RegisterFormPage } />
      <Route path='/account' component={ ManageAccountPage } />
      <Route path='*' component={ PageNotFound } />
   </Switch>
);

export default Routes;
