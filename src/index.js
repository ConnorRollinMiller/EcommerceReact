import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

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

// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history } basename='/'>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.querySelector('#root')
);
