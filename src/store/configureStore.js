import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from '../reducers';
import navigationMiddleware from '../middlewares/navigation';

const client = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
});

const middlewares = [
  thunk,
  axiosMiddleware(client),
  navigationMiddleware,
];

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
    ),
  );
}
