import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from '../modules';
// import createHistory from 'history/createBrowserHistory';
// import navigationMiddleware from '../middlewares/navigation';

// export const history = createHistory();

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  responseType: 'json',
});

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  axiosMiddleware(client),
];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
