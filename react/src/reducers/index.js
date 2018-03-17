import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import OneItemReducer from './OneItemReducer';
import FavouritesReducer from './FavouritesReducer';

const rootReducer = combineReducers({
  items: ItemsReducer,
  item: OneItemReducer,
  favourites: FavouritesReducer
});

export default rootReducer;
