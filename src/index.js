import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootStore from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';

const localStore = loadState();
const store = createStore(rootStore, localStore, composeWithDevTools());

store.subscribe(throttle(() => saveState(store.getState()), 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
