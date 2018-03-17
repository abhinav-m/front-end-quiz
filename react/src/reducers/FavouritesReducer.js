import { TOGGLE_ITEM_FAVOURITE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case TOGGLE_ITEM_FAVOURITE:
      //Without this array is being referred to, and state update is not triggered.
      let curFavourites = Array.from(state);
      if (curFavourites.includes(action.payload)) {
        //Add code to remove from favourites.
        let index = curFavourites.indexOf(action.payload);
        curFavourites.splice(curFavourites.indexOf(index, 1));
      } else {
        curFavourites.push(action.payload);
      }
      return curFavourites;

    default:
      return state;
  }
}
