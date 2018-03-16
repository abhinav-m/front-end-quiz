import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import OneItemReducer from './OneItemReducer';

const rootReducer = combineReducers({
  items: ItemsReducer,
  item: OneItemReducer
});

export default rootReducer;
