import ReviewList from "../../components/ReviewComponents/ReviewList";
import fetchReviews from "../../actions/ReviewComponentActions/fetchReviews";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { reviewList: state.reviewList, prodRating: state.prodRating };
};

export default connect(mapStateToProps, {
  fetchReviews,
})(ReviewList);
