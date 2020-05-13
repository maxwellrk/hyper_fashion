import React, { useEffect } from 'react';

const App = (props) => {
  useEffect(() => {
    props.fetchProductList().then((resp) => console.log(resp.payload));
  }, []);

  return <div>FEC - TYCHE </div>;
};

export default App;
