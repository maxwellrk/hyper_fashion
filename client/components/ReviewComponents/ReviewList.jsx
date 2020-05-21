import React from "react";
import ReviewListItem from "./ReviewListItem";
import RatingInfo from "./RatingInfo";
import { useEffect, useState } from "react";
import TestComponent from "./TestComponent";
import SubmitReviewForm from "./SubmitReviewForm";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { List, message, Avatar, Spin } from "antd";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InfiniteScroll from "react-infinite-scroller";
import $ from "jquery";
import "./ReviewStyles/reviewstyles.css";

const ReviewList = (props) => {
  const [reviewRender, addReviewRender] = useState(2);
  const [pageList, changePageList] = useState(1);
  const [reviewCount, changeReviewCount] = useState(0);
  const [addSortOrder, changeSortOrder] = useState("relevant");
  const [disableFetch, changeDisableFetch] = useState(false);
  const [finalCount, changeFinalCount] = useState(null);
  const [overallFilters, changeOverallFilters] = useState(props.totalFilters);
  const [searchFilter, addSearchFilter] = useState([]);
  const [reviewItems, addReviewItems] = useState([]);
  const [searchInput, changeSearchInput] = useState("");
  const [addedReview, setAddedReview] = useState(0);
  const [pageRefresh, setPageRefresh] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isReviewDisplay, setReviewDisplay] = useState(<div></div>);

  useEffect(() => {
    addReviewRender(2);
    changeReviewCount(5);
    changeFinalCount(null);
    changeDisableFetch(false);
    changeSortOrder("relevant");
    addReviewItems([]);
    props.fetchReviews(props.page, pageList, reviewCount, addSortOrder);
    props.fetchReviewMetaData(props.page).then((data) => {
      console.log("reviewmetadata,", data);
      if (reviewCount <= data.payload.totalRating) {
        changeFinalCount(data.payload.totalRating);
        changeReviewCount(reviewCount + 5);
      }
    });
  }, [props.page, props.productById.id, addedReview]);

  useEffect(() => {
    props
      .fetchReviews(props.page, pageList, reviewCount, addSortOrder)
      .then(() => {
        if (reviewCount <= finalCount) {
          changeReviewCount(reviewCount + 5);
        }
      });
  }, [reviewCount, addSortOrder]);

  const filterReviews = () => {
    //this function is currently forcing a requery of questions even
    //if its under 3 characters, should come back to make it only query if over 3
    //maybe make a function that creates filter callbacks?

    let query = searchInput.length > 2 ? searchInput.toLowerCase() : "";
    console.log("query:", query);
    let finalentry = reviewItems.filter(
      (item) => item.body.toLowerCase().indexOf(query) > -1
    );
    // var testentry;
    // for (var i = 0; i < finalentry.length; i++) {
    //   testentry = finalentry[i].body.split(new RegExp(`(${query})`, "gi"));
    // }
    // console.log("testentry:", testentry);
    addSearchFilter(finalentry);
    // return entry.filter((item) => item.body.toLowerCase().indexOf(query) > -1);
    // console.log(entry);
    // .toLowerCase().indexOf(query) > -1;
    // console.log(entry);
  };

  useEffect(() => {
    if (searchInput.length > 2) filterReviews(reviewItems);
  }, [searchInput]);

  useEffect(() => {
    addReviewItems(props.reviewList.results);
  }, [props.reviewList.results]);

  useEffect(() => {
    if (
      finalCount !== null &&
      (reviewRender > reviewItems ||
        reviewRender > filterReview(reviewItems, props.totalFilters).length ||
        (reviewItems && reviewRender >= 4))
    ) {
      changeDisableFetch(!disableFetch);
      console.log("no longer should update");
    }
  }, [reviewRender, reviewItems]);

  useEffect(() => {
    $(".sortdropdown").val("relevant");
  }, [props.productById.id]);
  // useEffect(() => {
  //   if (
  //     finalCount !== null &&
  //     (reviewRender >= reviewItems ||
  //       reviewRender >= filterReview(reviewItems, props.totalFilters).length)
  //   ) {
  //     changeDisableFetch(true);
  //     console.log("no longer should update");
  //   }
  // }, [finalCount, reviewRender]);
  let getMoreReviews = function getTheReviews() {
    setAddedReview(1);
  };

  // useEffect(() => {
  //   if (props.totalFilters.length > 0) {
  //   }
  // }, [props.totalFilters]);
  // function handleInfiniteOnLoad () {
  //   let data = reviewItems;
  //   setLoading(true)
  //   if (data.length > 14) {
  //     message.warning('Infinite List loaded all');
  //     this.setState({
  //       hasMore: false,
  //       loading: false,
  //     });
  //     return;
  //   }
  //   this.fetchData(res => {
  //     data = data.concat(res.results);
  //     this.setState({
  //       data,
  //       loading: false,
  //     });
  //   });
  // };

  let updateFunction = function updater() {
    console.log("clicked");
    addReviewRender(reviewRender + 2);
    // changeReviewCount(reviewCount + 5);
  };

  const handleChange = (event) => {
    changeSortOrder(event.target.value);
  };

  const filterReview = (input, filters) => {
    if (filters.length === 0) {
      return input;
    } else {
      return input.filter((item) => filters.includes(item.rating));
    }
  };

  useEffect(() => {
    var firstinput;
    if (searchInput.length > 2) {
      firstinput = searchFilter;
    } else {
      firstinput = reviewItems;
    }
    console.log(firstinput);
    if (reviewItems && reviewRender < 4) {
      setReviewDisplay(
        filterReview(firstinput, props.totalFilters)
          .slice(0, reviewRender)
          .map((item) => {
            return (
              <ReviewListItem
                fullquery={searchInput}
                answerList={props.questionsList.results}
                item={item}
              />
            );
          })
      );
    } else if (reviewItems && reviewRender >= 4) {
      setReviewDisplay(
        <div>
          <div className="demo-infinite-container">
            <InfiniteScroll initialLoad={false} pageStart={0} useWindow={false}>
              <List
                dataSource={filterReview(firstinput, props.totalFilters)}
                style={{ maxHeight: 1200, overflow: "auto" }}
                renderItem={(item) => (
                  <List.Item key={item.review_id}>
                    <ReviewListItem
                      fullquery={searchInput}
                      answerList={props.questionsList.results}
                      item={item}
                    />
                  </List.Item>
                )}
              ></List>
            </InfiniteScroll>
          </div>
        </div>
      );
    } else {
      setReviewDisplay(<div></div>);
    }
  }, [
    props.page,
    reviewItems,
    searchFilter,
    searchInput,
    reviewRender,
    props.totalFilters,
  ]);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      // paddingBottom: 0,
    },

    selectEmpty: {
      marginTop: theme.spacing(2),
      // style: {
      //   paddingBottom: 0,
      // },
    },
  }));

  const classes = useStyles();

  // <FormControl className={classes.formControl}>
  //       <Select
  //         value={age}
  //         onChange={handleChange}
  //         displayEmpty
  //         className={classes.selectEmpty}
  //         inputProps={{ 'aria-label': 'Without label' }}
  //       >
  //         <MenuItem value="" disabled>
  //           Placeholder
  //         </MenuItem>
  //         <MenuItem value={10}>Ten</MenuItem>
  //         <MenuItem value={20}>Twenty</MenuItem>
  //         <MenuItem value={30}>Thirty</MenuItem>
  //       </Select>
  //       <FormHelperText>Placeholder</FormHelperText>
  //     </FormControl>

  return (
    // <div>whatever</div>
    <div className="wholereviewlist">
      <div style={{ position: "relative", top: "8.1rem" }}>
        {/* <input
          id="searchbarinput"
          value={searchInput}
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            top: "8rem",
          }}
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(e) => {
            changeSearchInput(e.target.value);
          }}
        /> */}
        <form className={classes.root} noValidate autoComplete="off">
          <Input
            placeholder="SEARCH FOR REVIEWS"
            value={searchInput}
            inputProps={{ "aria-label": "description" }}
            onChange={(e) => {
              changeSearchInput(e.target.value);
            }}
          />
        </form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          flexBasis: "50%",
          flexGrow: "1",
          marginBottom: "-25px",
        }}
        className="partialreviewList"
      >
        <h2
          style={{
            marginBottom: 0,
            fontSize: "1rem",
            position: "relative",
            top: "10px",
          }}
        >
          {props.prodRating.totalRating} reviews, sorted by
        </h2>
        {/* <select
          className="sortdropdown"
          id="1"
          onChange={handleChange}
          data-default-value="relevant"
        >
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select> */}
        <FormControl className={classes.formControl}>
          <Select
            value={addSortOrder}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            IconComponent={ExpandMoreOutlinedIcon}
            id="sortdropdown"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="relevant">relevance</MenuItem>
            <MenuItem value="newest">newest</MenuItem>
            <MenuItem value="helpful">helpful</MenuItem>
          </Select>
          {/* <FormHelperText>Placeholder</FormHelperText> */}
        </FormControl>
      </div>
      <div>{isReviewDisplay}</div>
      <div style={{ height: "7rem" }}></div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // alignItems: "center",
          alignContent: "space-between",
        }}
      >
        <button
          className="addmorereviewsbutton"
          disabled={disableFetch || props.prodRating.totalRating === 0}
          type="button"
          onClick={() => updateFunction()}
        >
          <span className="addmorereviewsbuttontext">More Reviews</span>
        </button>
        <div style={{ width: "1.5rem" }}></div>
        <SubmitReviewForm
          addedR={getMoreReviews}
          presentcharacter={props.prodRating.fulldata}
          fetchReviews={props.fetchReviews}
          pageId={props.page}
          name={props.productById.name}
        />
      </div>
    </div>
  );
};

// {reviewItems ? (
//   reviewItems.slice(0, reviewRender).map((item) => {
//     return <ReviewListItem item={item} />;
//   })
// )

// {Object.keys(props.reviewList).length ? (
//   props.reviewList.results.map((item) => {
//     return <ReviewListItem item={item} />;
//   })
// )

export default ReviewList;

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
