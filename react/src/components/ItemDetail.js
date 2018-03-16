import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchItem } from '../actions';

class ItemDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchItem(id);
  }

  render() {
    const { isFetching, isError } = this.props.item;
    if (isFetching) {
      return <div>Loading..</div>;
    } else {
      const item = this.props.item.data;
      return item_details(item);
    }
  }
}

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

function mapStateToProps(state) {
  return Object.assign({}, state);
}

export default connect(mapStateToProps, { fetchItem })(ItemDetails);
