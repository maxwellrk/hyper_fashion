import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Card, Modal } from "antd";
import { useState } from "react";
import dateFormatter from "./ReviewComponentHelpers/reviewListItemDateFormatter";
import verifiedUserHelper from "./ReviewComponentHelpers/verifiedUserHelper";
import "./ReviewStyles/reviewstyles.css";

const ReviewListItem = ({ item, answerList }) => {
  //   let date = item.date.slice(0, 10);
  const [isVisible, setVisible] = useState(false);
  const [isHelpful, setHelpful] = useState(false);
  const [isReported, setReported] = useState(false);
  const [fullItemBody, setFullItemBody] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState("");
  // const [answerUsers, setAnswerUsers] = useState(
  //   verifiedUserHelper(answerList)
  // );
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

  // if (item.photos.length > 0) {
  //   var currentPhoto = item.photos[0].url;
  // }

  //come back to this to deal with multiple photos

  return (
    <div className="individual-reviewitem">
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
      <div>{fullItemBody ? item.body : item.body.slice(0, 251)}</div>
      {item.body.length > 250 ? (
        <button
          disabled={fullItemBody}
          className="showfullreview"
          onClick={() => setFullItemBody(true)}
        >
          Show more
        </button>
      ) : (
        <div></div>
      )}
      {/* const [fullItemBody, setFullItemBody] = useState(false) */}
      <div>
        {item.recommend ? (
          <div>&#10003;I recommend this product</div>
        ) : (
          <div>don't recommend placeholder</div>
        )}
      </div>
      <div>
        {item.response && item.response !== "null" ? (
          <div>Response from seller: {item.response}</div>
        ) : (
          <div>no response placeholder</div>
        )}
      </div>
      <div className="box">
        {item.photos.length > 0 ? (
          item.photos.map((photo) => {
            return (
              <div>
                <Card
                  onClick={showModal}
                  // footer={null}
                  // hoverable={true}
                  bordered={false}
                  style={{ width: 240 }}
                  cover={
                    <img
                      onClick={() => setCurrentPhoto(photo.url)}
                      alt="example"
                      src={photo.url}
                    />
                  }
                ></Card>
              </div>
            );
          })
        ) : (
          <div>no photo placeholder</div>
        )}
      </div>
      <div className="picturemodalratings">
        <Modal
          title=""
          visible={isVisible}
          centered
          bodyStyle={{ padding: "0" }}
          width={"60%"}
          height={"80%"}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
          onClick={handleCancel}
          closable={false}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            className="modalimage"
            alt="example"
            src={currentPhoto}
          />
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
