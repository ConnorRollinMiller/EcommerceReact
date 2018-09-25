import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default (initialState, history) => {
   const middleware = [
      thunk,
      routerMiddleware(history)
   ];

   let enhancers = [];

   if (process.env.NODE_ENV !== 'production') {
      const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

      if (typeof devToolsExtension === 'function') {
         enhancers.push(devToolsExtension());
      }
   }

   const composedEnhancers = compose(
      applyMiddleware(...middleware),
      ...enhancers
   );

   return createStore(
      rootReducer,
      initialState,
      composedEnhancers
   );
}


