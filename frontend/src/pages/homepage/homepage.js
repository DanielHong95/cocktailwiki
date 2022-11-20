import React from "react";

//components
import SearchBar from "../../components/searchbar/searchbar.js";
import NavBar from "../../components/navbar/navbar.js";
import "./homepage.css";

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>HOME</h1>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}

export default HomePage;
