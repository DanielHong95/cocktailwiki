import React from "react";

// import components
import NavBar from "../../components/navbar/navbar";
import List from "../../components/cocktaillist/cocktaillist";

function SpiritsPage() {
  return (
    <div className="container">
      <NavBar />
      <header>Cocktails</header>
      <List />
    </div>
  );
}

export default SpiritsPage;
