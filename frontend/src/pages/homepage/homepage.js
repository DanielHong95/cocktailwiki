import React from "react";
import "./homepage.css";

// import components
import SearchBar from "../../components/searchbar/searchbar";
import NavBar from "../../components/navbar/navbar";

function HomePage() {
  return (
    <div className="container">
      <NavBar />
      <header>The Cocktail Wiki</header>
      <SearchBar placeholder="Enter a Cocktail Name..." />
    </div>
  );
}

export default HomePage;
