import React from 'react';
import Question from './Question';
import Answer from './Answer';

const QnABlock = ({ entry }) => {
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
    date.toString().slice(0, 10);
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
      {Object.keys(entry.answers).map((answerId) => {
        entry.answers[answerId].date = dateFormatter(
          entry.answers[answerId].date
        );

        return <Answer info={entry.answers[answerId]} />;
      })}
    </div>
  );
};

export default QnABlock;
