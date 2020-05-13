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
        props.questionsList.results
          .map((entry) => {
            return <QnABlock entry={entry} />;
          })
          .sort((a, b) => {
            //sort by descending helpfulness
            return (
              b.props.entry.question_helpfulness -
              a.props.entry.question_helpfulness
            );
          })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default QnA;
