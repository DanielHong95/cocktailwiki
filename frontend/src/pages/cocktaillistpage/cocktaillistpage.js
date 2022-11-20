import React from "react";

//components
import NavBar from "../../components/navbar/navbar";
import CocktailList from "../../components/cocktaillist/cocktaillist";

function CocktailListPage() {
  return (
    <div>
      <NavBar />
      <h1>COCKTAILS</h1>
      <CocktailList />
    </div>
  );
}

export default CocktailListPage;
