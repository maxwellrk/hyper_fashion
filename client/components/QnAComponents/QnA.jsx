import React, { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
import SearchBar from './QuestionBar';

const QnA = ({ fetchQuestionsById, questionsList, productById }) => {
  const [renderAmount, changeRenderAmount] = useState(2);
  const [searchInput, changeSearchInput] = useState('');

  useEffect(() => {
    fetchQuestionsById(productById.id).then(() => {
      return changeRenderAmount(2);
    });
  }, [productById]);

  let button;

  if (
    questionsList.results === undefined ||
    !questionsList.results.length ||
    questionsList.results.length <= renderAmount
  ) {
    button = <div />;
  } else {
    button = (
      <button onClick={() => changeRenderAmount(renderAmount + 2)}>
        MORE ANSWERED QUESTIONS
      </button>
    );
  }

  return (
    <div
      style={{
        border: '2px solid black',
      }}
    >
      {/* should find a better way to do this, it's going to need to sort the list
          everytime, this sort should be done after productById changes, and keep a local state
          of the sorted array
       */}
      {Object.keys(questionsList).length ? (
        questionsList.results
          .sort((a, b) => {
            //sort by descending helpfulness
            return b.question_helpfulness - a.question_helpfulness;
          })
          .slice(0, renderAmount)
          .map((entry) => {
            return <QnABlock entry={entry} />;
          })
      ) : (
        <div />
      )}
      <button>ADD QUESTION</button>
      {button}
    </div>
  );
};

export default QnA;
