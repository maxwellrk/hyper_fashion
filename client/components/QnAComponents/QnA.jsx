import React from 'react';
import { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
const QnA = (props) => {
  const [renderAmount, changeRenderAmount] = useState(2);

  useEffect(() => {
    props.fetchQuestionsById(props.productById.id).then(() => {
      return changeRenderAmount(2);
    });
  }, [props.productById]);

  let button;

  if (
    props.questionsList.results === undefined ||
    !props.questionsList.results.length ||
    props.questionsList.results.length <= renderAmount
  ) {
    button = <div />;
  } else {
    button = (
      <button onClick={() => changeRenderAmount(renderAmount + 2)}>
        SHOW MORE QUESTIONS
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
      {Object.keys(props.questionsList).length ? (
        props.questionsList.results
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
