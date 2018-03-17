import { FETCH_ALL_ITEMS, FETCH_ITEM, TOGGLE_ITEM_FAVOURITE } from './types';

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

export function toggleFavourite(id) {
  return {
    type: TOGGLE_ITEM_FAVOURITE,
    payload: id
  };
}
