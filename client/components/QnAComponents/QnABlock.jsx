/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Question from './Question';
import Answer from './Answer';

const QnABlock = ({ entry }) => {
  const [answerDisplay, toggleAnswerDisplay] = useState(false);
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

  useEffect(() => {
    if (Object.keys(entry.answers).length > 2) {
      toggleAnswerDisplay(true);
    } else {
      toggleAnswerDisplay(false);
    }
  }, [entry.answers]);

  const dateFormatter = (date) => {
    const datesArray = date.toString().slice(0, 10).split('-');
    datesArray[1] = months[Number(datesArray[1]) - 1];
    return `${datesArray[1]} ${datesArray[2]}, ${datesArray[0]}`;
  };

  let answersButton;

  if (answerDisplay) {
    answersButton = (
      <p onClick={() => toggleAnswerDisplay(false)}>See More Answers</p>
    );
  } else if (!answerDisplay) {
    answersButton = (
      <p onClick={() => toggleAnswerDisplay(true)}>Collapse Answers</p>
    );
  } else {
    return;
  }

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
      {Object.keys(entry.answers)
        .map((answerId, index) => {
          entry.answers[answerId].newDate = dateFormatter(
            entry.answers[answerId].date
          );
          return <Answer info={entry.answers[answerId]} />;
        })
        //  Need to bring seller answers to the top of the page
        .sort((a, b) => {
          return b.props.info.helpfulness - a.props.info.helpfulness;
        })
        .filter((ele, index) => {
          if (answerDisplay && index < 2) {
            return ele;
          } else if (!answerDisplay) {
            return ele;
          }
        })}
      {Object.keys(entry.answers).length > 2 && answersButton}
    </div>
  );
};
//above still needs to cause a 
export default QnABlock;

// if (answerDisplay && index < 2) {
//   return <Answer info={entry.answers[answerId]} />;
// } else if (!answerDisplay) {
//   return <Answer info={entry.answers[answerId]} />;
// }
