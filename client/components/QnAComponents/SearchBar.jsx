import React from 'react';
// import './styles/QnAStylesheet.css';

const SearchBar = ({ changeSearchInput }) => {
  return (
    <input
      className="searchbar"
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      onChange={(e) => {
        changeSearchInput(e.target.value);
      }}
    />
  );
};

export default SearchBar;
