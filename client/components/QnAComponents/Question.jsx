/* eslint-disable camelcase */
import React from 'react';
import Helpful from './Helpful';

const Question = ({ question_body, question_helpfulness, question_id }) => {
  return (
    <div className="questionAndHelp">
      <p className="question">
        Q:
        {question_body}
      </p>
      <Helpful
        idBeingUsed={question_id}
        helpfulness={question_helpfulness}
        typeOfStored="questionId"
      />
    </div>
  );
};

export default Question;
