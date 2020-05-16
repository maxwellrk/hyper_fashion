import React from 'react';

const SearchBar = ({ searchInput, changeSearchInput }) => {
  return (
    <form
      onSubmit={() => {
        event.preventDefault();
      }}
    >
      <input
        type="Have a question? Search for answers…"
        value={searchInput}
        onChange={(e) => {
          changeSearchInput(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
