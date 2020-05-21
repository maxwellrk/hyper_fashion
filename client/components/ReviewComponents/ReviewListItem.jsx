import React from "react";
import StarRatings from "react-star-ratings";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Card, Modal } from "antd";
import { useState } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";
import dateFormatter from "./ReviewComponentHelpers/reviewListItemDateFormatter";
import verifiedUserHelper from "./ReviewComponentHelpers/verifiedUserHelper";
import "./ReviewStyles/reviewstyles.css";

const ReviewListItem = ({ item, answerList, fullquery }) => {
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

  function highLightText(text, querystring) {
    if (fullquery.length > 2) {
      const parts = text.split(new RegExp(`(${querystring})`, "gi"));
      return (
        <span>
          {" "}
          {parts.map((part, i) => (
            <span
              key={i}
              style={
                part.toLowerCase() === querystring.toLowerCase()
                  ? { backgroundColor: "#FFFF00" }
                  : {}
              }
            >
              {part}
            </span>
          ))}{" "}
        </span>
      );
    } else {
      return text;
    }
  }

  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {
    // console.log(e);
    setVisible(false);
  }

  function handleCancel(e) {
    // console.log(e);
    setVisible(false);
  }

  function markAsHelpful() {
    axios
      .put(`http://18.224.200.47/reviews/helpful/${item.review_id}/`)
      .then(() => {
        setHelpful(true);
      });
  }

  function markAsReported() {
    axios
      .put(`http://18.224.200.47/reviews/report/${item.review_id}/`)
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
      <div
        style={
          {
            // display: "flex",
            // flexFlow: "row nowrap",
            // alignItems: "center",
          }
        }
      >
        {/* {item.rating} */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            position: "relative",
            top: "21px",
          }}
        >
          <Rating
            name="indivdualRating"
            style={{
              color: "black",
              backgroundColor: "white",
              borderColor: "black",
              display: "flex",
              flexDirection: "row",
              width: "5px",
            }}
            value={item.rating}
            precision={0.1}
            size="small"
            emptyIcon={
              <StarBorderIcon
                fontSize="inherit"
                style={{ color: "black", borderColor: "black" }}
              />
            }
            readOnly
          />
        </div>
        {/* <StarRatings
          rating={item.rating}
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
        /> */}
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "flex-end",
            fontSize: "14px",
            color: "#adadad",
            position: "relative",
            top: "5px",
          }}
        >
          {item.reviewer_name}, {formattedDate}
        </div>
      </div>
      <div style={{ height: "1.5rem" }}></div>
      <div id="reviewtitle">{item.summary}</div>
      <div style={{ height: "1.5rem" }}></div>
      <div style={{ fontSize: "15px" }}>
        {fullItemBody
          ? highLightText(item.body, fullquery)
          : highLightText(item.body.slice(0, 251), fullquery)}
      </div>
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
      <div style={{ height: "1.7rem" }}></div>
      <div style={{ fontSize: "15px" }}>
        {item.recommend ? (
          <div>&#10003;I recommend this product</div>
        ) : (
          <div></div>
        )}
      </div>
      <div style={{ height: "0.8rem" }}></div>
      <div style={{ fontSize: "15px", background: "gainsboro" }}>
        {item.response && item.response !== "null" ? (
          <div>
            <div style={{ height: "1rem" }} />
            <div
              style={{ position: "relative", left: "1.5rem", fontWeight: 600 }}
            >
              Response:{" "}
            </div>
            <div style={{ height: "1rem" }} />

            <div style={{ position: "relative", left: "1.5rem" }}>
              {item.response}
            </div>
            <div style={{ height: "1.3rem" }} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div style={{ height: "1rem" }}></div>
      <div style={{ display: "flex", flexWrap: "wrap" }} className="box">
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
                      style={{
                        cursor: "pointer",
                        objectFit: "cover",
                        minHeight: "250px",
                        maxHeight: "250px",
                        paddingRight: "20px",
                      }}
                      alt="example"
                      src={photo.url}
                    />
                  }
                ></Card>
              </div>
            );
          })
        ) : (
          <div></div>
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
      <div
        className="helpfulnessandreported"
        style={{ display: "flex", fontSize: "12px" }}
      >
        Helpful?
        <div style={{ width: "0.3rem" }}></div>
        <div disabled={isHelpful} onClick={() => markAsHelpful()}>
          Yes ({isHelpful ? item.helpfulness + 1 : item.helpfulness})
        </div>
        <div style={{ width: "0.7rem" }}></div>|
        <div style={{ width: "0.7rem" }}></div>
        <div disabled={isReported} onClick={() => markAsReported()}>
          Report
        </div>
      </div>
      <hr style={{ border: "0.5px solid black", width: "auto%" }} />
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
