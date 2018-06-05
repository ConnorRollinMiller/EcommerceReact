import React from 'react';
import ReactDOM from 'react-dom';
import PageLayout from './Components/common/PageLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import { Provider } from 'react-redux';
import { store } from '../src/redux/store/configureStore';
import { fetchShoes } from './redux/actions/shoesAction';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import { history } from './redux/store/configureStore';

store.dispatch(fetchShoes());

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<PageLayout />
		</ConnectedRouter>
	</Provider>,
	document.querySelector('#root')
);
