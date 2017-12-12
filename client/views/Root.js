// import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'client/views/store';
import { Router } from 'react-router-dom';
import { Home, App } from 'views';
import { GennyData } from 'utils/genny';
import history from './history';
window.reactRouterHistory = history;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
