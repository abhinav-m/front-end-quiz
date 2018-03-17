import React from 'react';

import ItemCards from './item_cards';

const ItemsPage = props => {
  const { isFetching, isError, fetchLimitReached } = props.items;
  const { fetchItems } = props;
  if (isFetching) {
    return <div>Loading...</div>;
  } else {
    if (isError) {
      return <div>Whoops! some error occurred on our server.</div>;
    }
    return (
      <div className="itemsPage">
        <h1>Browse</h1>
        <div className="itemsContainer">
          <ItemCards items={props.items.data} />
        </div>
        <div className="loadButton">
          <LoadButton
            fetchLimitReached={fetchLimitReached}
            fetchItems={fetchItems}
          />
        </div>
      </div>
    );
  }
};

const LoadButton = props => (
  <button
    onClick={() => (props.fetchLimitReached ? true : props.fetchItems())}
    disabled={props.fetchLimitReached}
  >
    Load more
  </button>
);

export default ItemsPage;
