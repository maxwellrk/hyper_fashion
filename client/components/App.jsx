import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>FEC - TYCHE </div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, null)(App);
