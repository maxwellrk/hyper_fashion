import React from 'react';
import Question from './Question';
import Answer from './Answer';

const QnABlock = ({ entry }) => {
  return (
    <div>
      <Question />
      <Answer />
    </div>
  );
};

export default QnABlock;
