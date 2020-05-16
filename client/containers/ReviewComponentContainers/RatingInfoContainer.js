import RatingInfo from "../../components/ReviewComponents/RatingInfo";
import fetchReviewMetaData from "../../actions/ReviewComponentActions/fetchReviewMetaData";
import fetchReviews from "../../actions/ReviewComponentActions/fetchReviews";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { prodRating: state.prodRating };
};

export default connect(mapStateToProps, {
  fetchReviewMetaData,
  fetchReviews,
})(RatingInfo);
