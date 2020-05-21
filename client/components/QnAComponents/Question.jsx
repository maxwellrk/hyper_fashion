/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
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

Question.propTypes = {
  question_body: PropTypes.string.isRequired,
  question_helpfulness: PropTypes.number.isRequired,
  question_id: PropTypes.number.isRequired,
};

export default Question;
