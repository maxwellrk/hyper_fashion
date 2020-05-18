import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Card, Modal, Button, Form, Radio, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import $ from "jquery";
import "./ReviewStyles/reviewstyles.css";

const SubmitReviewForm = (props) => {
  const [cId, setcId] = useState(props.page);
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [filesList, setFileList] = useState([]);
  const [disableUpload, setDisableUpload] = useState(false);
  const [isRecommended, setRecommended] = useState(true);
  const [isCharacteristics, setCharacteristics] = useState({
    14: 3,
    15: 3,
    16: 3,
    17: 3,
    18: 3,
    19: 3,
  });
  const [isReviewSummary, setReviewSummary] = useState("");
  const [isReviewBody, setReviewBody] = useState("");
  const [isNickname, setNickname] = useState("");
  const [isEmail, setEmail] = useState("");

  const { TextArea } = Input;
  //   onChange={(e) => {
  //     changeInputEmail(e.target.value);
  //   }}

  //   const classes = useStyles();
  useEffect(() => {
    console.log(value);
    console.log(isRecommended);
    console.log(isCharacteristics);
    console.log(isReviewSummary);
    console.log(isReviewBody);
    console.log(filesList);
    console.log(isNickname);
    console.log(isEmail);
  }, [value]);

  function checkInputs() {
    let toAlert = "You must enter the following:";
    if (value === 0) {
      toAlert += "\nOverall rating";
    }
    if (!isReviewBody.length || isReviewBody.length < 50) {
      toAlert += "\nReview body";
    }
    if (isEmail.indexOf("@") === -1 || isEmail.indexOf(".") === -1) {
      toAlert += "\nEmail";
    }
    if (isNickname.length < 1) {
      toAlert += "\nReview body";
    }

    if (toAlert.length) {
      window.alert(toAlert);
      return false;
    } else {
      return true;
    }
  }

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const labels = {
    1: "Poor",

    2: "Fair",

    3: "Average",

    4: "Good",

    5: "Great",
  };
  const fileList = [];

  const props1 = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    defaultFileList: [...fileList],
  };
  //   const useStyles = makeStyles({
  //     root: {
  //       width: 200,
  //       display: "flex",
  //       alignItems: "center",
  //     },
  //   });

  useEffect(() => {
    if (filesList.length >= 5) {
      $(".uploadbutton").prop("disabled", true);
    }
  }, [filesList]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function showModal() {
    setVisible(true);
  }

  function handleOk(e) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
    axios
      .post(`http://18.224.200.47/reviews/${props.pageId}/`, {
        rating: value,
        summary: isReviewSummary,
        body: isReviewBody,
        recommend: isRecommended,
        name: isNickname,
        email: isEmail,
        photos: filesList,
        characteristics: isCharacteristics,
      })
      .then(() => {
        props.addedR();
      })
      .then(() => {
        // toggleQuestionModel(false);
        // changeInputEmail("");
        // changeInputNickname("");
        // changeInputQuestion("");
      });
  }

  function handleCancel(e) {
    setVisible(false);
  }

  //   function handleUpload(event) {
  // this.setState({ 'selectedFiles': info.fileList });
  // console.log(event.target.files[0]);
  // setFileList([...filesList, info.fileList]);
  //   }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        visible={isVisible}
        width={1000}
        title={
          <div>
            <div>Write Your Review</div>
            <div>About the {props.name}</div>
          </div>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={() => {
              if (checkInputs()) {
                handleOk();
              }
            }}
            //   {handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        {/* <p>Overall Rating</p> */}
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Overall Rating"
            name="Overall Rating"
            rules={[
              {
                required: true,
                message: "Please input a rating!",
              },
            ]}
          >
            <div className="submitrating">
              <Rating
                name="hover-feedback"
                value={value}
                style={{ color: "black" }}
                precision={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </div>
          </Form.Item>
          <div
            style={{
              display: "inline-flex",
              position: "relative",
              left: "45px",
            }}
          >
            <span style={{ color: "red", backgroundPosition: "right top" }}>
              *
            </span>
            <div>Do you recommend this product?</div>
            {/* <Form.Item
              label="Do you recommend this product?"
              name="Overall Rating"
              rules={[
                {
                  required: true,
                  message: "Please choose an option!",
                },
              ]}
            > */}
            <Radio.Group
              style={{
                display: "inline-flex",
                position: "relative",
                left: "10px",
              }}
              name="radiogroup"
              defaultValue={true}
              onChange={(e) => {
                setRecommended(e.target.value);
              }}
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </div>
          <div
            style={{
              position: "relative",
              left: "45px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                // position: "relative",
                // left: "10px",
              }}
            >
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div>Size</div>
              <Radio.Group
                defaultValue={3}
                buttonStyle="solid"
                onChange={(e) => {
                  setCharacteristics({
                    ...isCharacteristics,
                    14: e.target.value,
                  });
                }}
              >
                <Radio.Button value={1}>A size too small</Radio.Button>
                <Radio.Button value={2}>½ a size too small</Radio.Button>
                <Radio.Button value={3}>Perfect</Radio.Button>
                <Radio.Button value={4}>½ a size too big</Radio.Button>
                <Radio.Button value={5}>A size too wide</Radio.Button>
              </Radio.Group>
            </div>
            <div
              style={{
                display: "inline-flex",
                // position: "relative",
                // left: "10px",
              }}
            >
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div>Width</div>
              <Radio.Group
                defaultValue={3}
                buttonStyle="solid"
                onChange={(e) => {
                  setCharacteristics({
                    ...isCharacteristics,
                    15: e.target.value,
                  });
                }}
              >
                <Radio.Button value={1}>Too narrow</Radio.Button>
                <Radio.Button value={2}>Slightly narrow</Radio.Button>
                <Radio.Button value={3}>Perfect</Radio.Button>
                <Radio.Button value={4}>Slightly wide</Radio.Button>
                <Radio.Button value={5}>Too wide</Radio.Button>
              </Radio.Group>
            </div>
            <div
              style={{
                display: "inline-flex",
                // position: "relative",
                // left: "10px",
              }}
            >
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div>Comfort</div>
              <Radio.Group
                defaultValue={3}
                buttonStyle="solid"
                onChange={(e) => {
                  setCharacteristics({
                    ...isCharacteristics,
                    16: e.target.value,
                  });
                }}
              >
                <Radio.Button value={1}>Uncomfortable</Radio.Button>
                <Radio.Button value={2}>Slightly uncomfortable</Radio.Button>
                <Radio.Button value={3}>>Ok</Radio.Button>
                <Radio.Button value={4}>Comfortable</Radio.Button>
                <Radio.Button value={5}>Perfect</Radio.Button>
              </Radio.Group>
            </div>
            <div
              style={{
                display: "inline-flex",
                // position: "relative",
                // left: "10px",
              }}
            >
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div>Quality</div>
              <Radio.Group
                defaultValue={3}
                buttonStyle="solid"
                onChange={(e) => {
                  setCharacteristics({
                    ...isCharacteristics,
                    17: e.target.value,
                  });
                }}
              >
                <Radio.Button value={1}>Poor</Radio.Button>
                <Radio.Button value={2}>Below average</Radio.Button>
                <Radio.Button value={3}>What I expected</Radio.Button>
                <Radio.Button value={4}>Pretty great</Radio.Button>
                <Radio.Button value={5}>Perfect</Radio.Button>
              </Radio.Group>
            </div>
            <div
              style={{
                display: "inline-flex",
                // position: "relative",
                // left: "10px",
              }}
            >
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div>Length</div>
              <Radio.Group
                defaultValue={3}
                buttonStyle="solid"
                onChange={(e) => {
                  setCharacteristics({
                    ...isCharacteristics,
                    18: e.target.value,
                  });
                }}
              >
                <Radio.Button value={1}>Runs Short</Radio.Button>
                <Radio.Button value={2}>Runs slightly short</Radio.Button>
                <Radio.Button value={3}>Perfect</Radio.Button>
                <Radio.Button value={4}>Runs slightly long</Radio.Button>
                <Radio.Button value={5}>Runs long</Radio.Button>
              </Radio.Group>
            </div>
            <div
              style={{
                display: "inline-flex",
                // position: "relative",
                // left: "10px",
              }}
            >
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div>Fit</div>
              <Radio.Group
                defaultValue={3}
                buttonStyle="solid"
                onChange={(e) => {
                  setCharacteristics({
                    ...isCharacteristics,
                    19: e.target.value,
                  });
                }}
              >
                <Radio.Button value={1}>Runs tight</Radio.Button>
                <Radio.Button value={2}>>Runs slightly tight</Radio.Button>
                <Radio.Button value={3}>Perfect</Radio.Button>
                <Radio.Button value={4}>Runs slightly long</Radio.Button>
                <Radio.Button value={5}>Runs long</Radio.Button>
              </Radio.Group>
            </div>
          </div>
        </Form>
        <div style={{ margin: "24px", height: "20px" }} />

        <Input.Group style={{ width: "800px", alignItems: "center" }}>
          <div
            style={{
              display: "inline-flex",
              // position: "relative",
              // left: "10px",
            }}
          >
            <div>Review summary</div>
            <TextArea
              placeholder="Example: Best purchase ever!"
              autoSize
              maxLength="60"
              style={{
                position: "relative",
                width: "700px",
                left: "100px",
              }}
              onChange={(e) => {
                setReviewSummary(e.target.value);
              }}
              value={isReviewSummary}
            />
          </div>
          <div style={{ margin: "24px", height: "20px" }} />
          <div
            style={{
              display: "inline-flex",
              // position: "relative",
              // left: "10px",
            }}
          >
            <span style={{ color: "red", backgroundPosition: "right top" }}>
              *
            </span>
            <div>Review body</div>
            <TextArea
              placeholder="Why did you like the product or not?"
              autoSize
              maxLength="1000"
              style={{
                position: "relative",
                width: "700px",
                left: "100px",
              }}
              onChange={(e) => {
                setReviewBody(e.target.value);
              }}
              value={isReviewBody}
            />
          </div>
          <div>
            {isReviewBody.length < 50
              ? `Minimum required characters left: ${50 - isReviewBody.length}`
              : "Minimum reached"}
          </div>
          {/* <TextArea
            // value={value}
            // onChange={this.onChange}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          /> */}
        </Input.Group>
        <div style={{ margin: "24px", height: "20px" }} />

        <div
          style={{
            display: "inline-flex",
            // position: "relative",
            // left: "10px",
          }}
        >
          <div>Upload your photos</div>

          <Upload {...props1} onChange={(file) => setFileList(file.fileList)}>
            <Button className="uploadbutton">
              <UploadOutlined /> Upload
            </Button>
          </Upload>
        </div>
        <div style={{ margin: "24px", height: "20px" }} />

        <div
          style={{
            display: "inline-flex",
            // position: "relative",
            // left: "10px",
          }}
        >
          <span style={{ color: "red", backgroundPosition: "right top" }}>
            *
          </span>
          <div>What is your nickname?</div>
          <TextArea
            placeholder="Example: jackson11!"
            autoSize
            maxLength="60"
            style={{
              position: "relative",
              width: "700px",
              left: "100px",
            }}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            value={isNickname}
          />
        </div>
        <div style={{ margin: "24px", height: "20px" }} />

        <div>
          For privacy reasons, do not use your full name or email address
        </div>
        <div style={{ margin: "24px", height: "20px" }} />

        <div
          style={{
            display: "inline-flex",
            // position: "relative",
            // left: "10px",
          }}
        >
          <span style={{ color: "red", backgroundPosition: "right top" }}>
            *
          </span>
          <div>Your email</div>
          <TextArea
            placeholder="Example: jackson11@email.com"
            autoSize
            maxLength="60"
            style={{
              position: "relative",
              width: "700px",
              left: "100px",
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={isEmail}
          />
        </div>
        <div>For authentication reasons, you will not be emailed</div>
      </Modal>
    </div>
  );
};

export default SubmitReviewForm;
