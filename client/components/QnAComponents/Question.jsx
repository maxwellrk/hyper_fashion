const React = require('react');

const Question = ({
  asker_Name,
  question_body,
  question_date,
  question_helpfulness,
  reported,
}) => {
  return (
    <div>
      <h3>Q:</h3>
      <text>User: </text>
      <text>{asker_Name}</text>
      <br />
      <text>Date: </text>
      <text>{question_date}</text>
      <br />
      <text>Question: </text>
      <text>{question_body}</text>
      <br />
      <text>Helpful: </text>
      <text>Yes: {question_helpfulness}</text>
      <br />
      <text>ADD ANSWER</text>
    </div>
  );
};

export default Question;
