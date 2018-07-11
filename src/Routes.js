import React from 'react';
import HomePage from './Components/home-page/HomePage';
import ShopPage from './Components/shop-page/ShopPage';
import ProductPage from './Components/product-page/ProductPage';
import CheckoutPage from './Components/checkout-page/CheckoutPage';
import LoginFormPage from './Components/login-register-page/LoginFormPage';
import RegisterFormPage from './Components/login-register-page/RegisterFormPage';
import PageNotFound from './Components/common/PageNotFound';
import ManageAccountPage from './Components/manage-account-page/ManageAccountPage';

import { Route, Switch } from 'react-router-dom';

const Routes = () => (
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
