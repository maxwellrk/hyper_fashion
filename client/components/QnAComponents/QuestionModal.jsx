/* eslint-disable */
import React, { useState } from 'react';
import { Modal } from 'antd';
import axios from 'axios';

//fetchQuestionsById and currentId should be hooked up by react store, not passed down
//with props, need to go back and fix
const QuestionModal = ({
  questionModalRender,
  toggleQuestionModal,
  productById,
  fetchQuestionsById,
}) => {
  const [inputEmail, changeInputEmail] = useState('');
  const [inputQuestion, changeInputQuestion] = useState('');
  const [inputNickname, changeInputNickname] = useState('');

  const checkInputField = () => {
    let toAlert = 'You must enter the following:';
    if (!inputQuestion.length) {
      toAlert += '\nQuestion';
    }
    if (!inputNickname.length) {
      toAlert += '\nNickname';
    }
    if (inputEmail.indexOf('@') === -1 || inputEmail.indexOf('.') === -1) {
      toAlert += '\nEmail';
    }

    if (toAlert.length > 29) {
      window.alert(toAlert);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div
      style={{
        marginTop: '10px',
        display: 'inline-block',
      }}
    >
      <button
        style={{
          border: '1px solid black',
          height: '50px',
          backgroundColor: 'white',
        }}
        type="primary"
        onClick={() => {
          toggleQuestionModal(true);
        }}
      >
        Add A Question +
      </button>
      <Modal
        width="60vw"
        height="40vh"
        title={
          <div style={{ fontSize: '20px' }}>
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
              .then((resp) => {
                fetchQuestionsById(productById.id);
              })
              .then(() => {
                toggleQuestionModal(false);
                changeInputEmail('');
                changeInputNickname('');
                changeInputQuestion('');
              });
          }
        }}
        onCancel={() => {
          toggleQuestionModal(false);
          changeInputEmail('');
          changeInputNickname('');
          changeInputQuestion('');
        }}
      >
        <p>Question:</p>
        <textarea
          style={{
            width: '95%',
            height: '120px',
            resize: 'none',
            marginBottom: '10px',
          }}
          type="text"
          maxLength="1000"
          placeholder="Enter question here..."
          onChange={(e) => {
            changeInputQuestion(e.target.value);
          }}
          value={inputQuestion}
        />
        <p>Username:</p>
        <input
          style={{ width: '95%' }}
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          onChange={(e) => {
            changeInputNickname(e.target.value);
          }}
          value={inputNickname}
        />
        <p>For privacy reasons, do not use your full name or email address</p>
        <p>Email:</p>
        <input
          style={{ width: '95%' }}
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
