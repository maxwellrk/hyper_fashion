import ReviewList from "../../components/ReviewComponents/ReviewList";
import fetchReviews from "../../actions/ReviewComponentActions/fetchReviews";
import fetchReviewMetaData from "../../actions/ReviewComponentActions/fetchReviewMetaData";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    reviewList: state.reviewList,
    prodRating: state.prodRating,
    productById: state.productById,
    questionsList: state.questionsList,
  };
};

export default connect(mapStateToProps, {
  fetchReviews,
  fetchReviewMetaData,
})(ReviewList);
