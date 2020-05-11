import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { fetchProductList } from '../actions/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProductList();
  }

  render() {
    console.log(this.props.productList);
    return <div>FEC - TYCHE </div>;
  }
}

const mapStateToProps = (state) => {
  return { productList: state.productList };
};

export default connect(mapStateToProps, {
  fetchProductList: fetchProductList,
})(App);
