import React from 'react';
import Question from './Question';
import Answer from './Answer';

const QnABlock = ({ entry }) => {
  return (
    <div
      style={{
        border: '2px solid red',
      }}
    >
      <Question
        asker_Name={entry.asker_name}
        question_body={entry.question_body}
        question_date={entry.question_date}
        question_helpfulness={entry.question_helpfulness}
        reported={entry.reported}
      />
      {Object.keys(entry.answers).map((answerId) => {
        return <Answer info={entry.answers[answerId]} />;
      })}
    </div>
  );
};

export default QnABlock;
