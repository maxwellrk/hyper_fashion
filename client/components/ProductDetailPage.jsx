import React, { useEffect } from 'react';
import QnA from '../containers/QnAContainers/QnAContainer';
import RelatedItemAndOutfit from './RelatedItemAndOutfit.jsx';
import Overview from '../containers/OverviewContainers/OverviewContainer';

const ProductDetailPage = (props) => {
  useEffect(() => {
    // console.log('props in peductDetail', props);
    // console.log('id from props paramas', props.match.params.id);
    props.fetchProductById(props.match.params.id);
  }, [props.location]);

  return (
    <div>
      <Overview />
      <RelatedItemAndOutfit currentProduct={props.productById} />
      <QnA />
    </div>
  );
};

export default ProductDetailPage;
