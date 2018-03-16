import {
  FETCH_ALL_ITEMS,
  FETCH_ITEM,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESSFUL
} from '../actions/types';

export default function(state = { isFetching: true, isError: false }, action) {
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
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        data: action.data
      });

    default:
      return state;
  }
}
