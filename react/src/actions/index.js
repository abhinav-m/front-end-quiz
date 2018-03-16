import { FETCH_ALL_ITEMS, FETCH_ITEM } from './types';

export function fetchAllItems() {
  return {
    type: FETCH_ALL_ITEMS
  };
}

export function fetchItem(id) {
  return {
    type: FETCH_ITEM,
    payload: id
  };
}
