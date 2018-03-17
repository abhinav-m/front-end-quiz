import React from 'react';

const Favourite = props => {
  return (
    <span onClick={() => props.toggleFavourite(props.id)}>
      Click to make this your favourite
      {props.favourites.includes(props.id) ? 'Favourite' : ''}
    </span>
  );
};

export default Favourite;
