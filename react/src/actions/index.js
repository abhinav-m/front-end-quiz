import { FETCH_ITEMS } from './types';
import { data } from './item';

export function fetchItems() {
  return {
    type: FETCH_ITEMS
  };
}
