import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import reducers from './reducers';
import ItemsList from './containers/ItemsPageContainer';
import ItemDetail from './containers/ItemDetailContainer';
import fetchData from './middleware/FetchData';
//import ItemDetails from './components/ItemsDetail';

//FIX: Check if this is the correct way to pass middleware in this case.
const createStoreWithMiddleware = applyMiddleware(fetchData)(createStore);
//       <Route path="/item/:id" component={ItemDetails} />

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/item/:id" component={ItemDetail} />

        <Route path="/" component={ItemsList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
