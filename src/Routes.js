import React from 'react';
import HomePage from './Components/home-page/HomePage';
import ShopPage from './Components/shop-page/ShopPage';
import ProductPage from './Components/product-page/ProductPage';
import CheckoutPage from './Components/checkout-page/CheckoutPage';
import LoginFormPage from './Components/account-form-page/LoginFormPage';
import RegisterFormPage from './Components/account-form-page/RegisterFormPage';
import PageNotFound from './Components/common/PageNotFound';

import { Route, Switch } from 'react-router-dom';

const Routes = () => (
   <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/shop/:shoeId" component={ProductPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route exact path="/login" component={LoginFormPage} />
      <Route exact path="/register" component={RegisterFormPage} />
      <Route path="*" component={PageNotFound} />
   </Switch>
);

export default Routes;
