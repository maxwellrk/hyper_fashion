import React from 'react';
import { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
const QnA = (props) => {
  useEffect(() => {
    console.log(props);
    props.fetchQuestionsById(props.productById.id);
  }, [props.productById]);

  return (
    <div>
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
