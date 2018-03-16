import {
  FETCH_ITEM,
  FETCH_ITEM_ERROR,
  FETCH_ITEM_SUCCESSFUL
} from '../actions/types';

export default function(state = { isFetching: true, isError: false }, action) {
  switch (action.type) {
    case FETCH_ITEM:
      return Object.assign({}, state, { isFetching: true });

    case FETCH_ITEM_SUCCESSFUL:
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        data: action.data
      });

    case FETCH_ITEM_ERROR:
      return Object.assign({}, state, { isFetching: false, isError: true });

    default:
      return state;
  }
}
