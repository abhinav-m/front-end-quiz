import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItem } from '../actions';
import ItemDetails from '../components/item_details';

class ItemDetailsContainer extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchItem(id);
  }

  render() {
    return <ItemDetails item={this.props.item} />;
  }
}

function mapStateToProps(state) {
  return { item: state.item, fetchItem };
}

export default connect(mapStateToProps, { fetchItem })(ItemDetailsContainer);
