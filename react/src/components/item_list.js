import React from 'react';

const item_list = items => {
  return items.map(item => {
    return (
      <div className="card">
        <div>{item.title}</div>
        <img src={item.image} alt={item.description} />
        <div>{item.seller.company}</div>
      </div>
    );
  });
};

export default item_list;
