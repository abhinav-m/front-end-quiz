import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetails = props => {
  const { isFetching, isError } = props.item;

  if (isFetching) {
    return <div>Loading..</div>;
  } else {
    if (isError) {
      return <div>Whoops! some error occurred on our server.</div>;
    }
    return item_details(props.item.data);
  }
};

const item_details = item => {
  const style = {
    backgroundImage: `url(${item.image})`,
    paddingBottom: '100%'
  };

  return (
    <div className="itemContainer">
      <div className="titleBar">
        <Link to="/browse">Home</Link>
        <span>{item.seller.company}</span>
      </div>
      <div className="thumbNail" style={style} />
      <div className="itemSummary">
        <p className="itemName">{item.title}</p>
        <p className="itemPrice">
          {item.price ? item.price.amounts.USD : 'Price upon request.'}
        </p>
        <p className="itemMeasurements">
          Measurements:
          {item.measurements.display}
        </p>
      </div>
      <div className="purchaseButtons">
        <span className="button_purchase">Purchase</span>
        <span className="button_bid">Make offer</span>
      </div>
      <div className="itemDetails">
        <p className="itemDescription">{item.description}</p>
        <p className="itemCreator">{item.creators}</p>
      </div>
    </div>
  );
};

export default ItemDetails;