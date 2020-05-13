import React from 'react';
import { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
const QnA = (props) => {
  useEffect(() => {
    props.fetchQuestionsById(props.productById.id);
  }, [props.productById]);

  return (
    <div
      style={{
        border: '2px solid black',
      }}
    >
      {Object.keys(props.questionsList).length ? (
        props.questionsList.results.map((entry) => {
          return <QnABlock entry={entry} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default QnA;
