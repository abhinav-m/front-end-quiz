import React from 'react';

const item_list = items => {
  return items.map(item => {
    const style = {
      backgroundImage: `url(${item.image})`,
      paddingBottom: '100%'
    };
    return (
      <div className="card" key={parseInt(item.integerId)}>
        <div className="thumbNail" style={style} alt={item.description} />
      </div>
    );
  });
};

export default item_list;
