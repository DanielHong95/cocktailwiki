import React from "react";
import "./homepage.css";

// import components
import SearchBar2 from "../../components/searchbar2/searchbar2";
import NavBar2 from "../../components/navbar2/navbar2";

function HomePage() {
  return (
    <div>
      <NavBar2 />
      <h1>HOME</h1>
      <div className="searchbar">
        <SearchBar2 />
      </div>
      <div className="lorem-ipsum">
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
