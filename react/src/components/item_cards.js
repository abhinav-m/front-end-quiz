import React from 'react';
import { Link } from 'react-router-dom';

import Favourite from './favourite_item';

const ItemCards = props => {
  const style = {
    maxWidth: '300px'
  };
  return props.items.map(item => {
    return (
      <div
        className="card bg-light"
        style={style}
        key={parseInt(item.integerId, 10)}
      >
        <Link to={`/item/${item.integerId}`} className="card-body">
          <img
            className="card-img-top"
            src={item.image}
            alt={item.description}
          />
        </Link>
        <Favourite
          class="card-footer"
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          id={item.integerId}
        />
      </div>
    );
  });
};

export default ItemCards;
