import React from "react";

// import components
import NavBar from "../../components/navbar/navbar";
import List from "../../components/cocktaillist/cocktaillist";

function CocktailListPage() {
  return (
    <div className="container">
      <NavBar />
      <h2>Cocktails</h2>
      <List />
    </div>
  );
}

export default CocktailListPage;
