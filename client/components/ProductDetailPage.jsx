import React, { useEffect } from 'react';
import RelatedItemAndOutfit from './RelatedItemAndOutfit.jsx'

const ProductDetailPage = (props) => {
  useEffect(() => {
    console.log('props in peductDetail', props);
    console.log('id from props paramas', props.match.params.id);
    props.fetchProductById(props.match.params.id);
  }, [props.location]);

  return (
    <div>
      <h1>PRODUCT PAGE</h1>
      <RelatedItemAndOutfit currentProduct={props.productById}/>
    </div>
  );
};

export default ProductDetailPage;
