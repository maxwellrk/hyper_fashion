import React, { useEffect } from 'react';
import QnA from '../containers/QnAContainers/QnAContainer';
import RelatedItemAndOutfit from './RelatedItemAndOutfit.jsx';

const ProductDetailPage = (props) => {
  useEffect(() => {
    // console.log('props in peductDetail', props);
    // console.log('id from props paramas', props.match.params.id);
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
      {/*
      below is an option on how to set useEffect changes
        if we end up doing it this way, it won't double render on refresh
        full refresh but we will have to drill down this prop
        */}
      {/* <QnA url={props.location} id={props.match.params.id} /> */}
      <QnA />
      <RelatedItemAndOutfit currentProduct={props.productById} />
    </div>
  );
};

export default ProductDetailPage;
