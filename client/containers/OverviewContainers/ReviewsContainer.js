import {connect} from "react-redux";
import Reviews from "../../components/Overview/Reviews";

const mapStateToProps = (state) => {
  return {
    productById: state.productById,
    productRating: state.prodRating.averageRating,
  };
};

export default connect(mapStateToProps, null)(Reviews);
