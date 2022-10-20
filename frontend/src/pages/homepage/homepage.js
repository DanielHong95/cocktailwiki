import React from "react";
import "./homepage.css";

// import components
import SearchBar from "../../components/searchbar/searchbar";
import NavBar from "../../components/navbar/navbar";

function HomePage() {
  return (
    <center>
      <div className="container">
        <NavBar />
        <h1>The Cocktail Wiki</h1>
        <SearchBar placeholder="Enter a Cocktail Name..." />
      </div>
    </center>
  );
}

export default HomePage;
