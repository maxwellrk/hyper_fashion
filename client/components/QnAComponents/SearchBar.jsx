import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ changeSearchInput }) => (
  <input
    className="searchbar"
    placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
    onChange={(e) => {
      changeSearchInput(e.target.value);
    }}
  />
);

SearchBar.propTypes = {
  changeSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
