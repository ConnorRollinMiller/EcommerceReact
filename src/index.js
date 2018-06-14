import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header/Header';
import Footer from './Components/common/Footer';
import Routes from './Components/Routes';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore';
import { history } from './redux/store/configureStore';

import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-solid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import { fetchShoes } from './redux/actions/shoesAction';

// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }

store.dispatch(fetchShoes());

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history } basename='/'>
			<div id='page'>
				<Header />
				<Routes />
				<Footer />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.querySelector('#root')
);
