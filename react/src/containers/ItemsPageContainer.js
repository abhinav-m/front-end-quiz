import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemsPage from '../components/items_page';
import { fetchAllItems } from '../actions';
import '../styles/styles.css';

class ItemsPageContainer extends Component {
  componentDidMount() {
    //To not reload if data is present.
    if (this.props.items.data.length === 0) {
      this.props.fetchAllItems();
    }
  }

  render() {
    return (
      <ItemsPage
        items={this.props.items}
        fetchItems={this.props.fetchAllItems}
      />
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items, fetchAllItems };
}

export default connect(mapStateToProps, { fetchAllItems })(ItemsPageContainer);
