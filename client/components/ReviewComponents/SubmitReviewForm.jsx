import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Card, Modal, Button, Form, Radio, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";
import $ from "jquery";
import "./ReviewStyles/reviewstyles.css";
// import { is } from "bluebird";

const SubmitReviewForm = (props) => {
  const [cId, setcId] = useState(props.page);
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [filesLists, setFileList] = useState({});
  const [disableUpload, setDisableUpload] = useState(false);
  const [isRecommended, setRecommended] = useState(true);
  const [isCharacteristics, setCharacteristics] = useState({});
  const [presentCharacteristics, setpresentCharacteristics] = useState({});
  const [finalCharacteristics, setFinalCharacteristics] = useState({});
  const [isReviewSummary, setReviewSummary] = useState("");
  const [isReviewBody, setReviewBody] = useState("");
  const [isNickname, setNickname] = useState("");
  const [isEmail, setEmail] = useState("");
  const [testState, setTestState] = useState([]);

  useEffect(() => {
    let object1 = {};
    if (props.presentcharacter) {
      for (var key in props.presentcharacter.characteristics) {
        let current = props.presentcharacter.characteristics[key]["id"];
        object1[key] = current;
      }
    }
    setCharacteristics(object1);
  }, [props.presentcharacter]);

  const { TextArea } = Input;

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

    if (toAlert.length > 31) {
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

  useEffect(() => {
    var finalObject = {};
    if (Object.keys(presentCharacteristics).length > 0) {
      for (var key in presentCharacteristics) {
        var finalid = isCharacteristics[key];
        var finalcharacter = presentCharacteristics[key];
        finalObject[finalid] = finalcharacter;
      }
    }
    setFinalCharacteristics(finalObject);
  }, [presentCharacteristics, isVisible]);

  useEffect(() => {
    setVisible(false);
  }, [props.pageId]);

  const props1 = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    defaultFileList: [...fileList],
  };

  useEffect(() => {
    if (Object.keys(filesLists).length >= 1) {
      $(".uploadbutton").prop("disabled", true);
    }
  }, [filesLists]);

  useEffect(() => {
    $("#output").attr("src", testState[0]);
  }, [testState]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function showModal() {
    setVisible(true);
  }

  const uploadImage = async (e) => {
    const theFile = event.target.files;
    const data = new FormData();
    data.append("file", theFile[0]);
    data.append("upload_preset", "aaaimages");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/defu6rghk/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const finalfile = await res.json();
    setTestState([...testState, finalfile.url]);
  };

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
        photos: testState,
        characteristics: finalCharacteristics,
      })
      .then(() => {
        props.addedR();
      })
      .then(() => {
        Modal.destroyAll();
      });
  }

  function handleCancel(e) {
    setVisible(false);
  }

  return (
    <div className="reviewsmodal">
      <Button
        className="openmodalbutton"
        type="primary"
        style={{
          padding: "15px",
          height: "auto",
          fontWeight: 400,
          fontSize: 16,
          width: "auto",
          backgroundColor: "white",
          borderColor: "black",
          color: "black",
        }}
        onClick={showModal}
      >
        Add A Review +
      </Button>
      <Modal
        visible={isVisible}
        width={1000}
        destroyOnClose={true}
        title={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "30%",
            }}
          >
            <div style={{ fontSize: "35px" }}>Write Your Review</div>
            <div style={{ height: "15px" }}></div>
            <div style={{ fontSize: "20px" }}>About the {props.name}</div>
          </div>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={[
          <Button
            id="mybutton"
            style={{ backgroundColor: "white", borderColor: "black" }}
            key="back"
            onClick={handleCancel}
          >
            <div id="mybuttontext">Return</div>
          </Button>,
          <Button
            id="mybutton"
            key="submit"
            type="primary"
            style={{ backgroundColor: "white", borderColor: "black" }}
            onClick={() => {
              if (checkInputs()) {
                handleOk();
              }
            }}
          >
            <div id="mybuttontext">Submit</div>
          </Button>,
        ]}
      >
        <div className="modalcontainer">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="overallratinginput">
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
                    fontSize={20}
                    precision={1}
                    emptyIcon={
                      <StarBorderIcon
                        fontSize="inherit"
                        style={{ color: "black", borderColor: "black" }}
                      />
                    }
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={3}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
              </Form.Item>
            </div>
            <div className="recommendinput">
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div>Do you recommend this product?</div>

              <div style={{ display: "flex", width: "10%" }}></div>
              <Radio.Group
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
                name="radiogroup"
                defaultValue={true}
                onChange={(e) => {
                  setRecommended(e.target.value);
                }}
              >
                <Radio value={true}>Yes</Radio>
                <div style={{ display: "flex", width: "10%" }}></div>

                <Radio value={false}>No</Radio>
              </Radio.Group>
            </div>
            <div style={{ height: "2rem" }}></div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "red", backgroundPosition: "right top" }}>
                  *
                </span>
                <div>Size</div>
                <div style={{ display: "flex", width: "11.4%" }}></div>

                <div
                  style={{ display: "flex", width: "100%", flexWrap: "nowrap" }}
                >
                  <Radio.Group
                    defaultValue={3}
                    style={{
                      display: "flex",
                      flexBasis: "100%",
                      textAlign: "center",
                    }}
                    buttonStyle="solid"
                    onChange={(e) =>
                      isCharacteristics["Size"]
                        ? setpresentCharacteristics({
                            ...presentCharacteristics,
                            Size: e.target.value,
                          })
                        : console.log(e)
                    }
                  >
                    <Radio.Button value={1}>A size too small</Radio.Button>
                    <Radio.Button value={2}>½ a size too small</Radio.Button>
                    <Radio.Button value={3}>Perfect</Radio.Button>
                    <Radio.Button value={4}>½ a size too big</Radio.Button>
                    <Radio.Button value={5}>A size too wide</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "red", backgroundPosition: "right top" }}>
                  *
                </span>
                <div>Width</div>
                <div style={{ display: "flex", width: "10%" }}></div>

                <div
                  style={{ display: "flex", width: "100%", flexWrap: "nowrap" }}
                >
                  <Radio.Group
                    defaultValue={3}
                    buttonStyle="solid"
                    style={{
                      display: "flex",
                      flexBasis: "100%",
                      textAlign: "center",
                    }}
                    onChange={(e) => {
                      isCharacteristics["Width"]
                        ? setpresentCharacteristics({
                            ...presentCharacteristics,
                            Width: e.target.value,
                          })
                        : console.log(e);
                    }}
                  >
                    <Radio.Button value={1}>Too narrow</Radio.Button>
                    <Radio.Button value={2}>Slightly narrow</Radio.Button>
                    <Radio.Button value={3}>Perfect</Radio.Button>
                    <Radio.Button value={4}>Slightly wide</Radio.Button>
                    <Radio.Button value={5}>Too wide</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "red", backgroundPosition: "right top" }}>
                  *
                </span>
                <div>Comfort</div>
                <div style={{ display: "flex", width: "8.2%" }}></div>

                <Radio.Group
                  defaultValue={3}
                  buttonStyle="solid"
                  style={{
                    display: "flex",
                    flexBasis: "100%",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    isCharacteristics["Comfort"]
                      ? setpresentCharacteristics({
                          ...presentCharacteristics,
                          Comfort: e.target.value,
                        })
                      : console.log(e);
                  }}
                >
                  <Radio.Button value={1}>Uncomfortable</Radio.Button>
                  <Radio.Button value={2}>Slightly uncomfortable</Radio.Button>
                  <Radio.Button value={3}>Ok</Radio.Button>
                  <Radio.Button value={4}>Comfortable</Radio.Button>
                  <Radio.Button value={5}>Perfect</Radio.Button>
                </Radio.Group>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "red", backgroundPosition: "right top" }}>
                  *
                </span>
                <div>Quality</div>
                <div style={{ display: "flex", width: "9.15%" }}></div>

                <Radio.Group
                  defaultValue={3}
                  buttonStyle="solid"
                  style={{
                    display: "flex",
                    flexBasis: "100%",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    isCharacteristics["Quality"]
                      ? setpresentCharacteristics({
                          ...presentCharacteristics,
                          Quality: e.target.value,
                        })
                      : console.log(e);
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
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "red", backgroundPosition: "right top" }}>
                  *
                </span>
                <div>Length</div>
                <div style={{ display: "flex", width: "9.2%" }}></div>

                <Radio.Group
                  defaultValue={3}
                  buttonStyle="solid"
                  style={{
                    display: "flex",
                    flexBasis: "100%",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    isCharacteristics["Length"]
                      ? setpresentCharacteristics({
                          ...presentCharacteristics,
                          Length: e.target.value,
                        })
                      : console.log(e);
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
                  display: "flex",
                  flexDirection: "row",

                  alignItems: "center",
                }}
              >
                <span style={{ color: "red", backgroundPosition: "right top" }}>
                  *
                </span>
                <div>Fit</div>
                <div style={{ display: "flex", width: "12.7%" }}></div>

                <Radio.Group
                  defaultValue={3}
                  buttonStyle="solid"
                  style={{
                    display: "flex",
                    flexBasis: "100%",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    isCharacteristics["Fit"]
                      ? setpresentCharacteristics({
                          ...presentCharacteristics,
                          Fit: e.target.value,
                        })
                      : console.log(e);
                  }}
                >
                  <Radio.Button value={1}>Runs tight</Radio.Button>
                  <Radio.Button value={2}>Runs slightly tight</Radio.Button>
                  <Radio.Button value={3}>Perfect</Radio.Button>
                  <Radio.Button value={4}>Runs slightly long</Radio.Button>
                  <Radio.Button value={5}>Runs long</Radio.Button>
                </Radio.Group>
              </div>
            </div>
          </Form>
          <div style={{ margin: "24px", height: "20px" }} />

          <Input.Group style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", width: "20%" }}>
                Review summary
              </div>
              <TextArea
                placeholder="Example: Best purchase ever!"
                autoSize
                maxLength="60"
                style={{
                  display: "flex",
                  width: "80%",
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <span style={{ color: "red", backgroundPosition: "right top" }}>
                *
              </span>
              <div style={{ display: "flex", width: "19.2%" }}>Review body</div>

              <TextArea
                placeholder="Why did you like the product or not?"
                autoSize
                maxLength="1000"
                style={{
                  display: "flex",
                  width: "80%",
                }}
                onChange={(e) => {
                  setReviewBody(e.target.value);
                }}
                value={isReviewBody}
              />
            </div>
            <div style={{ position: "relative", left: "11.8rem" }}>
              {isReviewBody.length < 50
                ? `Minimum required characters left: ${
                    50 - isReviewBody.length
                  }`
                : "Minimum reached"}
            </div>
          </Input.Group>
          <div style={{ margin: "24px", height: "20px" }} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexBasis: "19.6%",
              }}
            >
              Upload your photos
            </div>

            <label class="custom-file-upload">
              Upload
              <input
                type="file"
                name="file"
                style={{ display: "none" }}
                id="file-selector"
                placerholder="Upload"
                onChange={uploadImage}
              />
            </label>
          </div>
          <div>
            <img
              style={{
                display: "flex",
                minHeight: "10px",
                height: "100px",
                maxWidth: "100px",
                position: "relative",
                left: "187px",
                top: "10px",
              }}
              id="output"
            ></img>
          </div>
          <div style={{ minHeight: "44px" }} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span style={{ color: "red", backgroundPosition: "right top" }}>
              *
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexBasis: "23.4%",
              }}
            >
              What is your nickname?
            </div>
            <TextArea
              placeholder="Example: jackson11!"
              autoSize
              maxLength="60"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              value={isNickname}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
              left: "19.4%",
            }}
          >
            For privacy reasons, do not use your full name or email address
          </div>
          <div style={{ margin: "24px", height: "20px" }} />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span style={{ color: "red", backgroundPosition: "right top" }}>
              *
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexBasis: "18.4%",
              }}
            >
              Your email
            </div>
            <TextArea
              placeholder="Example: jackson11@email.com"
              autoSize
              maxLength="60"
              style={{
                display: "flex",
                width: "80%",
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={isEmail}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
              left: "19%",
            }}
          >
            For authentication reasons, you will not be emailed
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SubmitReviewForm;
