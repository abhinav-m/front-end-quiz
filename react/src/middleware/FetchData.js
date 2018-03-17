import request from 'superagent';
import {
  FETCH_ALL_ITEMS,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESSFUL,
  FETCH_ITEM,
  FETCH_ITEM_ERROR,
  FETCH_ITEM_SUCCESSFUL
} from '../actions/types';

//TODO: isFavourite functionality.

const fetchData = store => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      //A very naive implementation of pagination.
      if (store.getState().items.fetchLimitReached) {
        //Pass action along.
        return next(action);
      } else {
        //Defaults for first fetch.
        let { start } = store.getState().items;
        let itemsPerPage = 9;
        let totalItems = store.getState().items.totalItems || itemsPerPage;

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
          //Adjust the next fetch start value.
          start = start + itemsPerPage;
          //Boolean for allowing/disabling more fetches.
          let fetchLimitReached = start >= totalItems;
          const data = {
            start,
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
