import { FETCH_ITEMS, FETCH_ITEMS_ERROR, FETCH_ITEMS_SUCCESSFUL } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return Object.assign({}, state, { isFetching: true });
    case FETCH_ITEMS_ERROR 
      return Object.assign({}, state, { isFetching:false , fetchError:true , fetchError:action.err});
    case FETCH_ITEMS_SUCCESSFUL
      return Object.assign({}, state, { isFetching:false, })
    default:
      return [];
  }
}
