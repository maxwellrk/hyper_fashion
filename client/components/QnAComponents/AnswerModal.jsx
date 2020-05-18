import React, { useState } from 'react';
import { Modal } from 'antd';
import axios from 'axios';

const AnswerModal = ({
  answerModalRender,
  toggleAnswerModal,
  fetchQuestionsById,
  question_body,
  question_id,
  productById,
}) => {
  const [inputEmail, changeInputEmail] = useState('');
  const [inputAnswer, changeInputAnswer] = useState('');
  const [inputNickname, changeInputNickname] = useState('');
  //needs to have input image field

  const checkInputField = () => {
    let toAlert = 'You must enter the following:';
    if (!inputAnswer.length) {
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
    <div>
      <button
        type="primary"
        onClick={() => {
          toggleAnswerModal(true);
        }}
      >
        Add Answer
      </button>
      <Modal
        title={
          <div>
            <p>Submit Your Answer</p>
            <p>
              {productById.name}: {question_body}
            </p>
          </div>
        }
        visible={answerModalRender}
        onOk={() => {
          if (checkInputField()) {
            axios
              .post(`http://18.224.200.47/qa/${question_id}/answers`, {
                body: inputAnswer,
                name: inputNickname,
                email: inputEmail,
              })
              .then(() => {
                fetchQuestionsById(productById.id);
              })
              .then(() => {
                toggleAnswerModal(false);
                changeInputEmail('');
                changeInputNickname('');
                changeInputAnswer('');
              });
          }
        }}
        onCancel={() => {
          toggleAnswerModal(false);
          changeInputEmail('');
          changeInputNickname('');
          changeInputAnswer('');
        }}
      >
        <input
          type="text"
          maxLength="1000"
          onChange={(e) => {
            changeInputAnswer(e.target.value);
          }}
          value={inputAnswer}
        />
        <br />
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jack543!"
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
          placeholder="Example: jack@email.com"
          onChange={(e) => {
            changeInputEmail(e.target.value);
          }}
          value={inputEmail}
        />
        <p>For authentication reasons, you will not be emailed</p>
        <br />
        <button>ADD IMAGE HERE (NON FUNC)</button>
      </Modal>
    </div>
  );
};

export default AnswerModal;
