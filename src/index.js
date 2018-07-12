import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import createHistory from 'history/createBrowserHistory';

import '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';
import '@fortawesome/fontawesome-free-solid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import ConnectedRouter from 'react-router-redux/ConnectedRouter';

const history = createHistory();
const store = configureStore({}, history);

// if (process.env.NODE_ENV !== 'production') {
// 	const { whyDidYouUpdate } = require('why-did-you-update');
// 	whyDidYouUpdate(React);
// }

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.querySelector('#root')
);
