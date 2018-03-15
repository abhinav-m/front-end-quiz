import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';

const rootReducer = combineReducers({
  items: ItemsReducer
});

export default rootReducer;
