import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItem, toggleFavourite } from '../actions';
import ItemDetails from '../components/item_details';

class ItemDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchItem(id);
  }

  render() {
    return (
      <ItemDetails
        item={this.props.item}
        toggleFavourite={this.props.toggleFavourite}
        favourites={this.props.favourites}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.item,
    favourites: state.favourites,
    fetchItem,
    toggleFavourite
  };
}

export default connect(mapStateToProps, { fetchItem, toggleFavourite })(
  ItemDetailsContainer
);
