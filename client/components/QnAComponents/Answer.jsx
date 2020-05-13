const React = require('react');

const Answer = ({ info }) => {
  return (
    <div>
      <h3>A: </h3>
      <p>{info.body}</p>

      <p>
        by {info.answerer_name}, {info.date} | Helpful? Yes ({info.helpfulness})
        | Report
      </p>
    </div>
  );
};

export default Answer;
