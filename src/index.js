import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootStore from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/sagas';

const localStore = loadState();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootStore,
  localStore,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools())
);

sagaMiddleware.run(rootSaga);


store.subscribe(throttle(() => saveState(store.getState()), 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
