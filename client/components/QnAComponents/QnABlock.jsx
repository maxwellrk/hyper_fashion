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
    console.log(
      Object.keys(entry.answers),
      Object.keys(entry.answers).length,
      entry.answers
    );
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

          if (answerDisplay && index < 2) {
            return <Answer info={entry.answers[answerId]} />;
          } else if (!answerDisplay) {
            return <Answer info={entry.answers[answerId]} />;
          }
        })
        .sort((a, b) => {
          return b.props.info.helpfulness - a.props.info.helpfulness;
        })}
      {answerDisplay && (
        <p onClick={() => toggleAnswerDisplay(false)}>Load More Answers</p>
      )}
    </div>
  );
};

export default QnABlock;
