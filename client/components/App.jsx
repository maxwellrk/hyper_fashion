import React, { useEffect } from 'react';
import ProductDetailPage from '../containers/productDetailPageContainer';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = (props) => {
  useEffect(() => {
    props.fetchProductList().then((resp) => console.log(resp.payload));
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/item/:id" component={ProductDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
