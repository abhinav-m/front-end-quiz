import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import reducers from './reducers';
import ItemsList from './components/ItemsList';
//import ItemDetails from './components/ItemsDetail';

const createStoreWithMiddleware = applyMiddleware()(createStore);
//       <Route path="/item/:id" component={ItemDetails} />

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ItemsList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
