import React, { useEffect } from 'react';
import { Modal, Button } from 'antd';

const QuestionModal = ({ questionModalRender, toggleQuestionModel }) => {
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
        title="example modal"
        visible={questionModalRender}
        onOk={() => {
          toggleQuestionModel(false);
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
