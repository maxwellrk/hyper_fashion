import React from 'react';

const Question = ({
  asker_Name,
  question_body,
  question_date,
  question_helpfulness,
  reported,
}) => {
  return (
    <div>
      <h3
        style={{
          display: 'inline',
        }}
      >
        Q: {question_body}
      </h3>
      <p
        style={{
          display: 'inline',
        }}
      >
        Helpful? Yes: {question_helpfulness} |
      </p>
      <p
        style={{
          display: 'inline',
        }}
      >
        Add Answer
      </p>
      <p>---------------------------------------------</p>
    </div>
  );
};

export default Question;
