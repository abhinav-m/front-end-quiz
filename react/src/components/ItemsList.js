import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchItems } from '../actions';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    console.log(this.props.items);
    const title = this.props.items[0] ? this.props.items[0]['title'] : 'test';
    return <div>{title}.</div>;
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { fetchItems })(ItemList);
