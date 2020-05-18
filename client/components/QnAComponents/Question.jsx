import React, { useEffect, useState } from 'react';
import Helpful from './Helpful';

const Question = ({ question_body, question_helpfulness, question_id }) => {
  return (
    <div>
      <h3
        style={{
          display: 'inline',
        }}
      >
        Q: {question_body}
      </h3>
      <Helpful
        idBeingUsed={question_id}
        helpfulness={question_helpfulness}
        typeOfStored="questionId"
      />
      <p>---------------------------------------------</p>
    </div>
  );
};

export default Question;
