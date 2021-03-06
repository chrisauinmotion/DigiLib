// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise';
// COMPONENTS & CONTAINERS
import Landing from './components/Landing';
import App from './components/App';
import Book from './containers/book';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/app" component={App} />
        <Route path="/book/:id" component={Book} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
