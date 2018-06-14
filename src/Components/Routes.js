import React from 'react';
import HomePage from './home/HomePage';
import ShopPage from './shop/ShopPage';
import ProductPage from './product/ProductPage';
import CheckoutPage from './checkout/CheckoutPage';
import LoginForm from './form/LoginForm';
import RegisterForm from './form/RegisterForm';
import PageNotFound from './common/PageNotFound';

import { Route, Switch } from 'react-router-dom';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={ HomePage } />
		<Route exact path='/shop' component={ ShopPage } />
		<Route path='/shop/:shoeId' component={ ProductPage } />
		<Route exact path='/checkout' component={ CheckoutPage } />
		<Route exact path='/login' component={ LoginForm } />
		<Route exact path='/register' component={ RegisterForm } />
		<Route path='*' component={ PageNotFound } />
	</Switch>
);

export default Routes;