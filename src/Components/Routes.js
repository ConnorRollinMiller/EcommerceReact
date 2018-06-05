import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import ShopPage from './shop/ShopPage';
import ProductPage from './product/ProductPage';
import CheckoutPage from './checkout/CheckoutPage';
import PageNotFound from './common/PageNotFound';

const Routes = ({ ...props }) => (
	<Switch>
		<Route exact path='/' component={ HomePage } />
		<Route exact path='/shop' component={ ShopPage } />
		<Route path='/shop/:shoeId' component={ ProductPage } />
		<Route exact path='/checkout' component={ CheckoutPage } />
		<Route path='*' component={ PageNotFound } />
	</Switch>
);

export default Routes;