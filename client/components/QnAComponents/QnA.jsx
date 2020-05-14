import React from 'react';
import { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
const QnA = (props) => {
  useEffect(() => {
    props.fetchQuestionsById(props.productById.id);
  }, [props.productById]);

  const [renderAmount, changeRenderAmount] = useState(2);
  return (
    <div
      style={{
        border: '2px solid black',
      }}
    >
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
        <div></div>
      )}
      <button onClick={() => changeRenderAmount(renderAmount + 2)}>
        RENDER MORE
      </button>
    </div>
  );
};

export default QnA;
