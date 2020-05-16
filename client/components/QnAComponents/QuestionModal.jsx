import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios';

//fetchQuestionsById and currentId should be hooked up by react store, not passed down
//with props, need to go back and fix
const QuestionModal = ({
  questionModalRender,
  toggleQuestionModel,
  productById,
}) => {
  const [inputEmail, changeInputEmail] = useState('');
  const [inputQuestion, changeInputQuestion] = useState('');
  const [inputNickname, changeInputNickname] = useState('');

  return (
    <div>
      <button
        type="primary"
        onClick={() => {
          toggleQuestionModel(true);
        }}
      >
        ADD A QUESTION
      </Button>
      <Modal
        title={
          <div>
            <p>Ask Your Question</p>
            <p>About the {productById.name}</p>
          </div>
        }
        visible={questionModalRender}
        onOk={() => {
          // axios
          // .post(`http://18.224.200.47/qa/${productById.id}`, {})
          // .then(() => {
          fetchQuestionsById(productById.id)
            // })
            .then(() => {
              toggleQuestionModel(false);
            });
        }}
        onCancel={() => {
          toggleQuestionModel(false);
        }}
      >
        <p>test</p>
      </Modal>
    </div>
  );
};

export default QuestionModal;
