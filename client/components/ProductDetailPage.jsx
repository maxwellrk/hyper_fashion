import React, { useEffect } from 'react';
import QnA from '../containers/QnAContainers/QnAContainer';
const ProductDetailPage = (props) => {
  useEffect(() => {
    props.fetchProductById(props.match.params.id);
  }, [props.location]);

  return (
    <div>
      <h1>PRODUCT PAGE</h1>
      {Object.keys(props.productById).map((info) => (
        <div>
          {<h3>{info}</h3>}
          {info !== 'features' && <p>{props.productById[info]}</p>}
        </div>
      ))}
      <QnA url={props.location} id={props.match.params.id} />
    </div>
  );
};

export default ProductDetailPage;
