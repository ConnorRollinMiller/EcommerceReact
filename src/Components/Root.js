import React from 'react';
import Header from './header/Header';
import Footer from './common/Footer';
import HomePage from './home/HomePage';
import ShopPage from './shop/ShopPage';
import ProductPage from './product/ProductPage';
import CheckoutPage from './checkout/CheckoutPage';
import PageNotFound from './common/PageNotFound';

import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../redux/store/configureStore';
import { fetchShoes } from '../redux/actions/shoesAction';

import { history } from '../redux/store/configureStore';

if (process.env.NODE_ENV !== 'production') {
	const { whyDidYouUpdate } = require('why-did-you-update');
	whyDidYouUpdate(React);
}

store.dispatch(fetchShoes());

const Root = () => (
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<div>
				<div className='container-fluid' id='page'>
					<Header />
					<Switch>
						<Route exact path='/' component={ HomePage } />
						<Route exact path='/shop' component={ ShopPage } />
						<Route path='/shop/:shoeId' component={ ProductPage } />
						<Route exact path='/checkout' component={ CheckoutPage } />
						<Route path='*' component={ PageNotFound } />
					</Switch>
					<Footer />
				</div>
			</div>
		</ConnectedRouter>
	</Provider>
);

export default Root;