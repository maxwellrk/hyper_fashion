/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Question from './Question';
import AnswerModal from '../../containers/QnAContainers/AnswerModalContainer';
import Answer from './Answer';

const QnABlock = ({ entry, productById }) => {
  const [answerDisplay, toggleAnswerDisplay] = useState(false);
  const [answerModalRender, toggleAnswerModal] = useState(false);

  useEffect(() => {
    if (Object.keys(entry.answers).length > 2) {
      toggleAnswerDisplay(true);
    } else {
      toggleAnswerDisplay(false);
    }
  }, [entry.answers]);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateFormatter = (date) => {
    const datesArray = date.toString().slice(0, 10).split('-');
    datesArray[1] = months[Number(datesArray[1]) - 1];
    return `${datesArray[1]} ${datesArray[2]}, ${datesArray[0]}`;
  };

  let answersButton;

  if (answerDisplay) {
    answersButton = (
      <a onClick={() => toggleAnswerDisplay(false)}>See More Answers</a>
    );
  } else if (!answerDisplay) {
    answersButton = (
      <a onClick={() => toggleAnswerDisplay(true)}>Collapse Answers</a>
    );
  } else {
    return;
  }

  return (
    <div>
      <div className="questionHeaderContainer">
        <Question
          question_id={entry.question_id}
          question_body={entry.question_body}
          question_helpfulness={entry.question_helpfulness}
        />
        <AnswerModal
          question_body={entry.question_body}
          question_id={entry.question_id}
          answerModalRender={answerModalRender}
          toggleAnswerModal={toggleAnswerModal}
        />
      </div>
      <div className="scrollContainerAnswers">
        {Object.keys(entry.answers)
          .map((answerId, index) => {
            entry.answers[answerId].newDate = dateFormatter(
              entry.answers[answerId].date
            );
            return <Answer info={entry.answers[answerId]} />;
          })
          //  Need to bring seller answers to the top of the page
          .sort((a, b) => {
            return (
              (b.props.info.answerer_name === 'Seller') -
                (a.props.info.answerer_name === 'Seller') ||
              b.props.info.helpfulness - a.props.info.helpfulness
            );
          })
          .filter((ele, index) => {
            if (answerDisplay && index < 2) {
              return ele;
            } else if (!answerDisplay) {
              return ele;
            }
          })}
      </div>
      {Object.keys(entry.answers).length > 2 && answersButton}
    </div>
  );
};
//above still needs to cause a
export default QnABlock;
