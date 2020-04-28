import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootStore from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
  todos: [
    { id: 1, text: "do something", status: true },
    { id: 2, text: "do something else", status: false },
  ]
}

const store = createStore(rootStore, defaultState, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
