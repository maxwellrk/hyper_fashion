import React, {useEffect, Children} from "react";
import RatingsandReviews from "./ReviewComponents/RatingsandReviews";
import QnA from "../containers/QnAContainers/QnAContainer";
import RelatedItemAndOutfit from "./RelatedItemsAndOutfit/RelatedItemsAndOutfit";
import Overview from "../containers/OverviewContainers/OverviewContainer";

export const AddClickTracking = (Component) => {
  return (props) => {
    console.log("props outer", props);
    return (
      <div
        onClick={(e, props) => {
          console.log("props inner", props);
          console.log(
            e.target,
            new Date(),
            (<Component />).type.name || Component.WrappedComponent.name
          );
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
