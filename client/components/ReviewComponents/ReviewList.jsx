import React from "react";
import ReviewListItem from "./ReviewListItem";
import { useEffect, useState } from "react";
import TestComponent from "./TestComponent";
import $ from "jquery";

const ReviewList = (props) => {
  const [reviewRender, addReviewRender] = useState(2);
  const [pageList, changePageList] = useState(1);
  const [reviewCount, changeReviewCount] = useState(5);
  const [addSortOrder, changeSortOrder] = useState("relevant");
  const [disableFetch, changeDisableFetch] = useState(false);
  const [finalCount, changeFinalCount] = useState(null);
  // const [reviewItems, addReviewItems] = useState([]);

  useEffect(() => {
    addReviewRender(2);
    changeReviewCount(5);
    changeFinalCount(null);
    changeDisableFetch(false);
    changeSortOrder("relevant");
    props.fetchReviews(props.page, pageList, reviewCount, addSortOrder);
    props.fetchReviewMetaData(props.page).then((data) => {
      console.log("reviewmetadata,", data);
      if (reviewCount < data.payload.totalRating) {
        changeFinalCount(data.payload.totalRating);
        changeReviewCount(reviewCount + 5);
      }
    });
  }, [props.page]);

  useEffect(() => {
    props
      .fetchReviews(props.page, pageList, reviewCount, addSortOrder)
      .then(() => {
        if (reviewCount < finalCount) {
          changeReviewCount(reviewCount + 5);
        }
      });
  }, [reviewCount, addSortOrder]);

  useEffect(() => {
    if (finalCount !== null && reviewRender >= finalCount) {
      changeDisableFetch(true);
      console.log("no longer should update");
    }
  }, [finalCount, reviewRender]);

  let updateFunction = function updater() {
    console.log("clicked");
    addReviewRender(reviewRender + 2);
    // changeReviewCount(reviewCount + 5);
  };

  const handleChange = (event) => {
    changeSortOrder(event.target.value);
  };

  // useEffect(() => {
  //   props.fetchReviews(props.page, pageList, addSortOrder).then((data) => {
  //     // console.log("fetchdata:", data);
  //     return addReviewItems((reviewItems) => [
  //       ...reviewItems,
  //       data.payload.results,
  //     ]);
  //   });
  // }, [props.page]);

  // onClick={() => addReviewRender(reviewRender + 2); changePageList(pageList + 1); changeReviewCount(reviewCount + 10) }

  // fetchQuestionsById(productById.id)
  //     .then(() => {
  //       return changeQuestionRender(2);
  //     })
  // if (
  //   questionsList.results === undefined ||
  //   !questionsList.results.length ||
  //   questionsList.results.filter(filterQuestions).length <= questionRender
  // ) {
  //   moreQuestions = <div />;
  // } else {
  //   moreQuestions = (
  //     <button onClick={() => changeQuestionRender(questionRender + 2)}>
  //       MORE ANSWERED QUESTIONS
  //     </button>
  //   );
  // }
  // const fetchReviewMetaData = (id = 1, pageNumber = 1, sortOrder = "relevant") => {
  //   return (dispatch) => {
  //     let url = `http://18.224.200.47/reviews/${id}/list`;
  //     let url = `http://18.224.200.47/reviews/${id}/list/?page=${pageNumber}&count=10&sort=${sortOrder}`;

  return (
    // <div>whatever</div>
    <div>
      <div>
        <h2>{props.prodRating.totalRating} reviews, sorted by</h2>
        <select
          className="sortdropdown"
          id="1"
          onChange={handleChange}
          data-default-value="relevant"
        >
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
      <div>
        {Object.keys(props.reviewList).length ? (
          props.reviewList.results.slice(0, reviewRender).map((item) => {
            return <ReviewListItem item={item} />;
          })
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <button
          disabled={disableFetch}
          type="button"
          onClick={() => updateFunction()}
        >
          More Reviews
        </button>
      </div>
    </div>
  );
};

// {Object.keys(props.reviewList).length ? (
//   props.reviewList.results.map((item) => {
//     return <ReviewListItem item={item} />;
//   })
// )

export default ReviewList;
