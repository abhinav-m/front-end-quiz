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
    const { isFetching, isError } = this.props.items;
    if (isFetching) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="itemsContainer">{item_list(this.props.items.data)}</div>
      );
    }
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state);
}

export default connect(mapStateToProps, { fetchItems })(ItemList);
