import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import {persistStore, autoRehydrate} from 'redux-persist';

// Apply middlewares
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// Apply reduces and autoRehydrate()
const store = createStoreWithMiddleware(reducers, autoRehydrate());

// Persist store to allow local storage
persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
