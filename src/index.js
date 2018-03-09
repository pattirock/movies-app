import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import './assets/stylesheets/index.css';

import AppRoutes from './assets/javascripts/routes';
// import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

render(
  // <Provider store={store}>
  <AppRoutes />,
  // </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
