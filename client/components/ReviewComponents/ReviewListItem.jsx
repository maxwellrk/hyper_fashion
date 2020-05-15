import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Card } from "antd";
import dateFormatter from "./ReviewComponentHelpers/reviewListItemDateFormatter";

const ReviewListItem = ({ item }) => {
  //   let date = item.date.slice(0, 10);
  let formattedDate = dateFormatter(item.date);

  return (
    <div>
      <div>
        {item.rating}
        <Rating
          name="indivdualRating"
          style={{ color: "black" }}
          value={item.rating}
          precision={0.1}
          size="large"
          readOnly
        />
        {/* <StarRatings
          rating={item.rating}
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
        /> */}
        {item.reviewer_name},{formattedDate}
      </div>
      <div>{item.summary}</div>
      <div>{item.body}</div>
      <div>
        {item.recommend ? (
          <div>I recommend this product</div>
        ) : (
          <div>don't recommend placeholder</div>
        )}
      </div>
      <div>
        {item.response && item.response !== "null" ? (
          <div>Response: {item.response}</div>
        ) : (
          <div>no response placeholder</div>
        )}
      </div>
      <div>
        {item.photos.length > 0 ? (
          item.photos.map((photo) => {
            return (
              <Card
                bordered={false}
                style={{ width: 240 }}
                cover={<img alt="example" src={photo.url} />}
              ></Card>
              //   <img
              //     style={{
              //       width: "50%",
              //       height: "auto",
              //     }}
              //     src={photo.url}
              //     alt="new"
              //   />
            );
          })
        ) : (
          <div>no photo placeholder</div>
        )}
      </div>
      <div>Helpful? Yes({item.helpfulness}) | Report</div>
      <p>---------------------------------------------</p>
    </div>
  );
};

export default ReviewListItem;

// {
//     body,
//     date,
//     helpfulness,
//     photos,
//     rating,
//     recommend,
//     response,
//     review_id,
//     reviewer_name,
//     summary,
//   }
