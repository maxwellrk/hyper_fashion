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
  const [searchFilter, addSearchFilter] = useState([]);
  const [reviewItems, addReviewItems] = useState([]);
  const [searchInput, changeSearchInput] = useState("");
  const [addedReview, setAddedReview] = useState(0);
  const [isLoading, setLoading] = useState(false);
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
      if (reviewCount <= data.payload.totalRating) {
        changeFinalCount(data.payload.totalRating);
        changeReviewCount(reviewCount + 5);
      }
    });
  }, [props.page, props.productById.id]);

  useEffect(() => {
    props
      .fetchReviews(props.page, pageList, reviewCount, addSortOrder)
      .then(() => {
        if (reviewCount <= finalCount) {
          changeReviewCount(reviewCount + 5);
        }
      });
  }, [reviewCount, addSortOrder, addedReview]);

  const filterReviews = () => {
    let query = searchInput.length > 2 ? searchInput.toLowerCase() : "";
    let finalentry = reviewItems.filter(
      (item) => item.body.toLowerCase().indexOf(query) > -1
    );

    addSearchFilter(finalentry);
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
    }
  }, [reviewRender, reviewItems]);

  useEffect(() => {
    $(".sortdropdown").val("relevant");
  }, [props.productById.id]);

  let getMoreReviews = function getTheReviews() {
    setAddedReview(1);
  };

  let updateFunction = function updater() {
    addReviewRender(reviewRender + 2);
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
          <div id="demo-infinite-container">
            <InfiniteScroll initialLoad={false} pageStart={0} useWindow={false}>
              <List
                dataSource={filterReview(firstinput, props.totalFilters)}
                style={{ maxHeight: 1200, overflow: "auto" }}
                renderItem={(item) => (
                  <List.Item key={item.review_id}>
                    <ReviewListItem
                      style={{ position: "relative", top: "20px" }}
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
      width: 140,
      minWidth: 150,
    },

    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <div className="wholereviewlist">
      <div style={{ position: "relative", top: "8.1rem" }}>
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
          marginBottom: "-15px",
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
          {props.reviewList.results
            ? props.reviewList.results.length
            : props.prodRating.totalRating}{" "}
          reviews, sorted by
        </h2>

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
        </FormControl>
      </div>
      <div>{isReviewDisplay}</div>
      <div style={{ height: "7rem" }}></div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
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

export default ReviewList;
