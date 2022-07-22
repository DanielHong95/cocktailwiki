import React from "react";
import "./App.css";

// import components
import SearchBar from "./components/searchbar/searchbar2";

function App() {
  return (
    <div className="container">
      <header>The Cocktail Database</header>
      <SearchBar placeholder="Enter a Cocktail Name..." />
    </div>
  );
}

export default App;
