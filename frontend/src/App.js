import React, { Fragment } from "react";
import "./App.css";

// import components
import SearchBar from "./components/searchbar/searchbar";

function App() {
  return (
    <Fragment>
      <div className="container">
        <header>The Cocktail Database</header>
        <SearchBar placeholder="Enter a Cocktail Name..." />
      </div>
    </Fragment>
  );
}

export default App;
