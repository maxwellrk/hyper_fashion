import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Card, Modal } from "antd";
import { useState } from "react";
import dateFormatter from "./ReviewComponentHelpers/reviewListItemDateFormatter";
import "./ReviewStyles/reviewstyles.css";

const ReviewListItem = ({ item }) => {
  //   let date = item.date.slice(0, 10);
  const [isVisible, setVisible] = useState(false);
  const [isHelpful, setHelpful] = useState(false);
  const [isReported, setReported] = useState(false);
  let formattedDate = dateFormatter(item.date);

  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {
    console.log(e);
    setVisible(false);
  }

  function handleCancel(e) {
    console.log(e);
    setVisible(false);
  }

  function markAsHelpful() {
    axios
      .put(`http://18.224.200.47/reviews/helpfu/${props.item.review_id}/`)
      .then(() => {
        setHelpful(true);
      });
  }

  function markAsReported() {
    axios
      .put(`http://18.224.200.47/reviews/report/${props.item.review_id}/`)
      .then(() => {
        setReported(true);
      });
  }

  if (item.photos.length > 0) {
    var currentPhoto = item.photos[0].url;
  }

  //come back to this to deal with multiple photos

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
          <div>&#10003;I recommend this product</div>
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
      <div className="box">
        {item.photos.length > 0 ? (
          item.photos.map((photo) => {
            return (
              <Card
                onClick={showModal}
                // footer={null}
                // hoverable={true}
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
      <div>
        <Modal
          title=""
          visible={isVisible}
          centered
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <img alt="example" src={currentPhoto} />
        </Modal>
      </div>
      <div>
        Helpful?{" "}
        <a disabled={isHelpful} onClick={() => markAsHelpful()}>
          Yes({item.helpfulness})
        </a>{" "}
        |{" "}
        <a disabled={isReported} onClick={() => markAsReported()}>
          Report
        </a>
      </div>
      <p>---------------------------------------------</p>
    </div>
  );
};
// src={item.photos.url}

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
