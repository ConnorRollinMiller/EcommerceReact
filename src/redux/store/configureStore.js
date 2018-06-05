import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const enhancers = [];
const initialState = {};

const middleware = [
	thunk,
	routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

export const store = createStore(
	rootReducer,
	initialState,
	composedEnhancers
);


