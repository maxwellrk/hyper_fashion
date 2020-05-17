import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import axios from "axios";

//fetchQuestionsById and currentId should be hooked up by react store, not passed down
//with props, need to go back and fix
const QuestionModal = ({
  questionModalRender,
  toggleQuestionModel,
  productById,
  fetchQuestionsById,
}) => {
  const [inputEmail, changeInputEmail] = useState("");
  const [inputQuestion, changeInputQuestion] = useState("");
  const [inputNickname, changeInputNickname] = useState("");

  const checkInputField = () => {
    let toAlert = "You must enter the following:";
    if (!inputQuestion.length) {
      toAlert += "\nQuestion";
    }
    if (!inputNickname.length) {
      toAlert += "\nNickname";
    }
    if (inputEmail.indexOf("@") === -1 || inputEmail.indexOf(".") === -1) {
      toAlert += "\nEmail";
    }

    if (toAlert.length > 29) {
      window.alert(toAlert);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <button
        type="primary"
        onClick={() => {
          toggleQuestionModel(true);
        }}
      >
        ADD A QUESTION
      </button>
      <Modal
        title={
          <div>
            <p>Ask Your Question</p>
            <p>About the {productById.name}</p>
          </div>
        }
        visible={questionModalRender}
        onOk={() => {
          if (checkInputField()) {
            axios
              .post(`http://18.224.200.47/qa/${productById.id}`, {
                body: inputQuestion,
                name: inputNickname,
                email: inputEmail,
              })
              .then(() => {
                fetchQuestionsById(productById.id);
              })
              .then(() => {
                toggleQuestionModel(false);
                changeInputEmail("");
                changeInputNickname("");
                changeInputQuestion("");
              });
          }
        }}
        onCancel={() => {
          toggleQuestionModel(false);
          changeInputEmail("");
          changeInputNickname("");
          changeInputQuestion("");
        }}
      >
        <input
          type="text"
          maxLength="1000"
          onChange={(e) => {
            changeInputQuestion(e.target.value);
          }}
          value={inputQuestion}
        />
        <br />
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => {
            changeInputNickname(e.target.value);
          }}
          value={inputNickname}
        />
        <p>For privacy reasons, do not use your full name or email address</p>
        <br />
        <input
          type="text"
          maxLength="60"
          placeholder="Why did you like the product or not?"
          onChange={(e) => {
            changeInputEmail(e.target.value);
          }}
          value={inputEmail}
        />
        <p>For authentication reasons, you will not be emailed</p>
      </Modal>
    </div>
  );
};

export default QuestionModal;
