import React, { useEffect } from 'react';
import RelatedItemsAndOutfit from './RelatedItemsAndOutfit/RelatedItemsAndOutfit';

const ProductDetailPage = (props) => {
  useEffect(() => {
    // console.log('props in peductDetail', props);
    // console.log('id from props paramas', props.match.params.id);
    props.fetchProductById(props.match.params.id);
  }, [props.location]);

  return (
    <div>
      <RelatedItemsAndOutfit id={props.match.params.id}/>
    </div>
  );
};

export default ProductDetailPage;
