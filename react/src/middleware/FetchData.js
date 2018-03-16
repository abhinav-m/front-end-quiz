import request from 'superagent';
import {
  FETCH_ALL_ITEMS,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESSFUL,
  FETCH_ITEM,
  FETCH_ITEM_ERROR,
  FETCH_ITEM_SUCCESSFUL
} from '../actions/types';
//Middleware will be called when data needs to be fetched.
//Action.type will be FETCH_ITEMS , it will get the requested api and return accordingly.
const fetchData = store => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      //TODO: add pagination logic.
      //Basic logic.
      // Fetch a particular amount of items, add to previous state
      //http://localhost:3001/browse?start=1&limit=50
      const ALL_ITEMS_URL = '/browse?start=1&limit=9';
      request.get(ALL_ITEMS_URL).end((err, res) => {
        if (err) {
          return next({
            type: FETCH_ITEMS_ERROR,
            err
          });
        }

        const data = res.body.items;

        return next({
          type: FETCH_ITEMS_SUCCESSFUL,
          data
        });
      });
      break;

    case FETCH_ITEM:
      const id = action.payload;
      const ITEM_URL = `/item/${id}`;
      request.get(ITEM_URL).end((err, res) => {
        if (err) {
          return next({
            type: FETCH_ITEM_ERROR,
            err
          });
        }

        const data = res.body;

        return next({
          type: FETCH_ITEM_SUCCESSFUL,
          data
        });
      });
      break;

    default:
      break;
  }
};
export default fetchData;
