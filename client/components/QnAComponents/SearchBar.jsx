/* eslint-disable */
import React from 'react';


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
