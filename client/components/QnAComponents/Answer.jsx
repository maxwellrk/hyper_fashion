const React = require('react');

const Answer = ({ info }) => {
  return (
    <div>
      <h3>A:</h3>
      <text>User: </text>
      <text>{info.answer_name}</text>
      <br />
      <text>Date: </text>
      <text>{info.date}</text>
      <br />
      <text>Answer: </text>
      <text>{info.body}</text>
      <br />
      <text>Helpful? Yes({info.helpfulness})</text>
    </div>
  );
};

export default Answer;
