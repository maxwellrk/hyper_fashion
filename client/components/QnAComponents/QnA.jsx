/* eslint-disable */
import React, { useEffect, useState } from 'react';
import QnABlock from './QnABlock';
import SearchBar from './SearchBar';
import QuestionModal from '../../containers/QnAContainers/QuestionModalContainer';
// import './styles/QnAStylesheet.css';
const QnA = ({ fetchQuestionsById, questionsList, productById }) => {
  const [questionRender, changeQuestionRender] = useState(2);
  const [searchInput, changeSearchInput] = useState('');
  const [questionModalRender, toggleQuestionModal] = useState(false);

  useEffect(() => {
    fetchQuestionsById(productById.id)
      .then(() => {
        changeQuestionRender(2);
      })
      .then(() => {
        changeSearchInput('');
      });
  }, [productById]);

  const filterQuestions = (entry) => {
    //this function is currently forcing a requery of questions even
    //if its under 3 characters, should come back to make it only query if over 3
    //maybe make a function that creates filter callbacks?

    let query = searchInput.length > 2 ? searchInput.toLowerCase() : '';
    return entry.question_body.toLowerCase().indexOf(query) > -1;
  };

  let moreQuestions;

  if (
    questionsList.results === undefined ||
    !questionsList.results.length ||
    questionsList.results.filter(filterQuestions).length <= questionRender
  ) {
    moreQuestions = <div className="moreQuestions" />;
  } else {
    moreQuestions = (
      <button
        className="moreQuestions"
        style={{
          'margin-top': '10px',
          'margin-right': '20px',
          border: '1px solid black',
          height: '50px',
          'background-color': 'white',
        }}
        onClick={() => changeQuestionRender(questionRender + 2)}
      >
        MORE ANSWERED QUESTIONS
      </button>
    );
  }

  let listOfQnABlock;

  if (Object.keys(questionsList).length) {
    listOfQnABlock = questionsList.results
      .filter(filterQuestions)
      .sort((a, b) => {
        //sort by descending helpfulness
        return b.question_helpfulness - a.question_helpfulness;
      })
      .slice(0, questionRender)
      .map((entry) => {
        return <QnABlock entry={entry} key={entry.question_id} />;
      });
  } else {
    listOfQnABlock = <div />;
  }

  return (
    <div className="mainContainer">
      <div className="subContainer">
        <h6>QUESTIONS & ANSWERS</h6>
        <SearchBar
          searchInput={searchInput}
          changeSearchInput={changeSearchInput}
        />
        <div className="scrollContainerQuestions">{listOfQnABlock}</div>
        {moreQuestions}
        <QuestionModal
          questionModalRender={questionModalRender}
          toggleQuestionModal={toggleQuestionModal}
        />
      </div>
    </div>
  );
};

export default QnA;
