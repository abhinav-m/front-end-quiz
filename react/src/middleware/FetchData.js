import request from 'superagent';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESSFUL
} from '../actions/types';
//Middleware will be called when data needs to be fetched.
//Action.type will be FETCH_ITEMS , it will get the requested api and return accordingly.
const fetchData = store => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_ITEMS:
      //Need to add api for pagination.
      //http://localhost:3001/browse?start=1&limit=50
      const API_URL = '/browse';
      request.get(API_URL).end((err, res) => {
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

    default:
      break;
  }
};

export default fetchData;
