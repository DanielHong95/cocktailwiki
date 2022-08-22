import React from "react";

// import components
import NavBar from "../../components/navbar/navbar";
import List from "../../components/cocktaillist/cocktaillist";

function CocktailListPage() {
  return (
    <div className="container">
      <NavBar />
      <header>Cocktails</header>
      <List />
    </div>
  );
}

export default CocktailListPage;
