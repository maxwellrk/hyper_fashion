import React, { useEffect, Children } from 'react';
import RatingsandReviews from './ReviewComponents/RatingsandReviews';
import QnA from '../containers/QnAContainers/QnAContainer';
import RelatedItemAndOutfit from './RelatedItemsAndOutfit/RelatedItemsAndOutfit';
import Overview from '../containers/OverviewContainers/OverviewContainer';
import axios from 'axios';

export const AddClickTracking = (Component, compName) => {
  return (props) => {
    return (
      <div
        onClick={(e, props) => {
          let url = `http://18.224.200.47/interactions/`;
          let interactionsModel = {
            element: e.target.className || e.target.toString(),
            widget: compName,
            time: new Date(),
          };
          return axios.post(url, interactionsModel).then((resp) => {
            console.log(resp);
          });
        }}
      >
        <Component {...props} />
      </div>
    );
  };
};

const TrackedOverview = AddClickTracking(Overview, 'Overview');
const TrackedRelatedItemAndOutfit = AddClickTracking(
  RelatedItemAndOutfit,
  'RelatedItemAndOutfit'
);
const TrackedQnA = AddClickTracking(QnA, 'QnA');
const TrackedRatingsandReviews = AddClickTracking(
  RatingsandReviews,
  'RatingsandReviews'
);

const ProductDetailPage = (props) => {
  useEffect(() => {
    // console.log('props in peductDetail', props);
    // console.log('id from props paramas', props.match.params.id);
    props.fetchProductById(props.match.params.id);
  }, [props.location]);

  return (
    <React.Fragment>
      <TrackedOverview />
      <TrackedRelatedItemAndOutfit currentProduct={props.productById} />
      <TrackedQnA />
      <TrackedRatingsandReviews page={props.match.params.id} />
    </React.Fragment>
  );
};

export default ProductDetailPage;
