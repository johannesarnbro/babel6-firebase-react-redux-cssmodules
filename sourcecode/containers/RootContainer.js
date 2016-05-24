import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import AppContainer from './AppContainer';
import Chapter from '../containers/ChapterContainer';
import Cover from '../components/Cover/Cover';
import configureStore from '../store/configureStore';
const store = configureStore();

const history = createHistory();


const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={AppContainer}>
        <Route path="/" component={Cover} />
        <Route path="/:chapter" component={Chapter} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
