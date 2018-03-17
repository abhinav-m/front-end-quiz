import React from 'react';
import { Link } from 'react-router-dom';

import Favourite from './favourite_item';

const ItemCards = props => {
  return props.items.map(item => {
    const style = {
      backgroundImage: `url(${item.image})`,
      paddingBottom: '100%'
    };
    return (
      <div>
        <Link to={`/item/${item.integerId}`} key={parseInt(item.integerId, 10)}>
          <div className="card ">
            <div className="thumbNail" style={style} alt={item.description} />
          </div>
        </Link>
        <Favourite
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          id={item.integerId}
        />
      </div>
    );
  });
};

export default ItemCards;
