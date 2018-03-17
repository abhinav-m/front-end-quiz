import React from 'react';
import { Link } from 'react-router-dom';

const ItemCards = props => {
  return props.items.map(item => {
    const style = {
      backgroundImage: `url(${item.image})`,
      paddingBottom: '100%'
    };
    return (
      <Link to={`/item/${item.integerId}`} key={parseInt(item.integerId, 10)}>
        <div className="card ">
          <div className="thumbNail" style={style} alt={item.description} />
        </div>
      </Link>
    );
  });
};

export default ItemCards;
