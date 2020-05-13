import React, { useEffect } from 'react';
import ProductDetailPage from '../containers/productDetailPageContainer';
const App = (props) => {
  useEffect(() => {
    props.fetchProductList().then((resp) => console.log(resp.payload));
  }, []);

  return <ProductDetailPage />;
};

export default App;
