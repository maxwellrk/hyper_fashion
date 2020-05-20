import {AddClickTracking} from "../components/ProductDetailPage";
import addTrackingInfo from "../actions/addTrackingInfo";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    trackingInfo: state.trackingObj,
    productById: state.productById,
  };
};

export default connect(mapStateToProps, {
  addTrackingInfo,
})(AddClickTracking);
