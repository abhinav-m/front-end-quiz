import React from 'react';
import { Link } from 'react-router-dom';

const item_list = items => {
  return items.map(item => {
    const style = {
      backgroundImage: `url(${item.image})`,
      paddingBottom: '100%'
    };
    return (
      <Link to={`/item/${item.integerId}`}>
        <div className="card " key={parseInt(item.integerId)}>
          <div className="thumbNail" style={style} alt={item.description} />
        </div>
      </Link>
    );
  });
};

export default item_list;
