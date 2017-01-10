import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import {persistStore, autoRehydrate} from 'redux-persist';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers, autoRehydrate());

persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
