import React from 'react';
import { Link } from 'react-router-dom';

import Favourite from './favourite_item';

const ItemDetails = props => {
  const { isFetching, isError } = props.item;
  if (isFetching) {
    return <div>Loading..</div>;
  } else {
    if (isError) {
      return <div>Whoops! some error occurred on our server.</div>;
    }

    return item_details(props);
  }
};

const item_details = props => {
  const { favourites, toggleFavourite } = props;
  const item = props.item.data;
  const style = {
    minWidth: '300px',
    color: 'brown'
  };
  return (
    <div className="itemDetail">
      <div className={'card'} style={style}>
        <div className="card-header">
          <h4 className="card-title text-center">{item.seller.company}</h4>
        </div>
        <img className="card-img-top" src={item.image} alt={item.description} />
        <div className="card-body">
          <p className="card-footer text-center">{item.creators}</p>
          <div className="purchaseButtons">
            <button className="btn btn-dark">Purchase</button>
            <button className="btn btn-dark">Make offer</button>
          </div>
        </div>
      </div>

      <div
        className={
          favourites.includes(item.integerId)
            ? ' itemDescription  jumbotron border border-success'
            : ' itemDescription  jumbotron border '
        }
      >
        <h4 className="text-center">{item.title}</h4>
        <h5 className=" text-center">
          {item.price ? item.price.amounts.USD : 'Price upon request.'}{' '}
        </h5>
        <p className="text-center">{item.description}</p>
        <p className="itemMeasurements">
          Measurements:
          {item.measurements.display}
        </p>
        <Favourite
          class="center-text"
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          id={item.integerId}
        />
        <Link to="/browse">Back to home</Link>
      </div>
    </div>
  );
};

export default ItemDetails;
