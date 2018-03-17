import React from 'react';

const Favourite = props => {
  return (
    <div
      className={
        props.favourites.includes(props.id) ? 'btn btn-success' : 'btn btn-dark'
      }
      onClick={() => props.toggleFavourite(props.id)}
    >
      {props.favourites.includes(props.id)
        ? 'Remove from wishlist'
        : 'Add to wishlist'}
    </div>
  );
};

export default Favourite;
