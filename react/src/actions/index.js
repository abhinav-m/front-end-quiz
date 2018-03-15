import { FETCH_ITEMS } from './types';
import { data } from './item';

export function fetchItems() {
  console.log(data);
  return {
    type: FETCH_ITEMS,
    payload: { data }
  };
}
