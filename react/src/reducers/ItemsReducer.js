import {
  FETCH_ALL_ITEMS,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESSFUL
} from '../actions/types';

export default function(
  state = {
    isFetching: true,
    isError: false,
    start: 1,
    data: [],
    totalItems: 0,
    fetchLimitReached: false
  },
  action
) {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_ITEMS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        errorMessage: action.err
      });
    case FETCH_ITEMS_SUCCESSFUL:
      //Add new data to existing data.
      const { items, totalItems, fetchLimitReached, start } = action.data;
      const data = state.data.concat(items);

      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        data,
        start,
        totalItems,
        fetchLimitReached
      });

    default:
      return state;
  }
}
