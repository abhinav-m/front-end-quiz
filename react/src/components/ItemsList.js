import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import item_list from './item_list';
import { fetchItems } from '../actions';
import '../styles/styles.css';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const items = this.props.items;
    if (items.length === 0) {
      return <div>Loading...</div>;
    } else {
      return <div className="itemsContainer">{item_list(items)}</div>;
    }
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { fetchItems })(ItemList);
