import axios from "axios";
import getAverageReview from "./ActionHelpers/averageReviewHelper";
import getTotalReview from "./ActionHelpers/totalReviewHelper";

const fetchReviewMetaData = (id = 1) => {
  return (dispatch) => {
    let url = `http://18.224.200.47/reviews/${id}/meta`;
    return axios
      .get(url)
      .then((results) => {
        return dispatch({
          type: "META_BY_PRODUCT",
          payload: {
            averageRating: getAverageReview(results.data.ratings),
            totalRating: getTotalReview(results.data.ratings),
            fulldata: results.data,
          },
        });
      })
      .catch((err) => {
        console.log("error getting product metadata:", err);
      });
  };
};

// const fetchReviewMetaData = (id = 1) => {
//     return (dispatch) => {
//       let url = `http://18.224.200.47/reviews/${id}/meta`;
//       return axios
//         .get(url)
//         .then((results) => {
//           return dispatch({
//             type: "META_BY_PRODUCT",
//             payload: results.data,
//           });
//         })
//         .catch((err) => {
//           console.log("error getting product metadata:", err);
//         });
//     };
//   };

export default fetchReviewMetaData;
