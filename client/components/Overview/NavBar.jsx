import React from "react";

const NavBar = () => {
  return (
    <div style={{borderBottom: "1px solid"}}>
      <nav class="navbar navbar-light justify-content-between">
        <a class="navbar-brand">Team Tyche</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button class="btn my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
