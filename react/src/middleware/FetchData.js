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
//TODO: isFavourite functionality.

const fetchData = store => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      //Check if we have fetched All items.
      //A very naive implementation of pagination.
      if (store.getState().items.fetchLimitReached) {
        //Pass action along.
        return next(action);
      } else {
        //TODO: simplify using simple addition.
        let { start, end } = store.getState().items;
        let itemsPerPage = 9;

        let totalItems = store.getState().items.totalItems || itemsPerPage;

        end = end <= totalItems ? end : totalItems;

        const ALL_ITEMS_URL = `/browse?start=${start}&limit=${itemsPerPage}`;
        request.get(ALL_ITEMS_URL).end((err, res) => {
          if (err) {
            return next({
              type: FETCH_ITEMS_ERROR,
              err
            });
          }
          const items = res.body.items;
          totalItems = res.body.totalItems;

          start = end + 1;
          end = start + itemsPerPage;

          //The last request was done successfully when this is true.
          let fetchLimitReached = end === totalItems;

          const data = {
            start,
            end,
            items,
            fetchLimitReached,
            totalItems
          };

          return next({
            type: FETCH_ITEMS_SUCCESSFUL,
            data
          });
        });
      }

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
