import axios from "axios";

const fetchReviewMetaData = (id = 1) => {
  return (dispatch) => {
    let url = `http://18.224.200.47/reviews/${id}/list`;
    return axios
      .get(url)
      .then((results) => {
        return dispatch({
          type: "REVIEWS_BY_PRODUCT",
          payload: results.data,
        });
      })
      .catch((err) => {
        console.log("error getting product reviews:", err);
      });
  };
};

export default fetchReviewMetaData;
