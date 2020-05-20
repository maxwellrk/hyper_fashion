import React, {useEffect, Children} from "react";
import RatingsandReviews from "./ReviewComponents/RatingsandReviews";
import QnA from "../containers/QnAContainers/QnAContainer";
import RelatedItemAndOutfit from "./RelatedItemsAndOutfit/RelatedItemsAndOutfit";
import Overview from "../containers/OverviewContainers/OverviewContainer";
import axios from "axios";

export const AddClickTracking = (Component) => {
  return (props) => {
    return (
      <div
        onClick={(e, props) => {
          console.log(
            e.target,
            new Date(),
            (<Component />).type.name || Component.WrappedComponent.name
          );
          let url = `http://18.224.200.47/interactions/`;
          let interactionsModel = {
            element: e.target.toString(),
            widget:
              (<Component />).type.name ||
              Component.WrappedComponent.name.toString(),
            time: new Date(),
          };
          // return axios.post(url, interactionsModel).then((results) => {
          //   console.log("tracking results", results);
          // });
        }}
      >
        <Component {...props} />
      </div>
    );
  };
};

const TrackedOverview = AddClickTracking(Overview);
const TrackedRelatedItemAndOutfit = AddClickTracking(RelatedItemAndOutfit);
const TrackedQnA = AddClickTracking(QnA);
const TrackedRatingsandReviews = AddClickTracking(RatingsandReviews);

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
